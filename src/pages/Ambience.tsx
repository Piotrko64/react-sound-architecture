/* eslint-disable no-sequences */
import { useState, useEffect, useMemo } from "react";

import ambienceback from "../img/ambience.webp";
import Baner from "../components/baner";
import arrow from "../img/arrow.png";
import { Helmet } from "react-helmet";
import { forAmbience } from "../typing/datatype";
import { forforSA } from "./functions/forforSA";

//Selected user tags
let arrayTag: Array<string> = [];
let deleteTag: number;

function Ambience(): JSX.Element {
    // useState
    let [mymusic, setmymusic] = useState<forAmbience[]>([]); // original array iframes
    let [thisArray, setthisArray] = useState<forAmbience[]>([]); // array to manipulate

    let [mytags, setmytags] = useState<string[]>([]);
    let [goodArrayTag, setgoodArrayTag] = useState<Array<number>>([]);

    // Html elements
    let buttonTag: NodeListOf<HTMLButtonElement>;
    let grid: HTMLElement;
    let arrowshow: HTMLElement;

    // Others
    let counterTags: Array<number> = []; //Array to counting iframes
    let counterForTag: number = 0; // let to counting single
    let thisForEachTag: string; // let for one tag
    let thisForEachMusic: forAmbience;
    // Search Tags

    //Baner usememo
    const BanerMemo = useMemo(() => <Baner title="Ambience" image={ambienceback} />, []);
    // Function for counting iframes
    function counterAll() {
        mytags.forEach(
            (tag: string) => (
                (counterForTag = 0),
                (thisForEachTag = tag),
                thisArray.forEach(
                    (mus: forAmbience) => (
                        (thisForEachMusic = mus), thisForEachMusic.tag.indexOf(thisForEachTag) !== -1 ? counterForTag++ : false
                    )
                ),
                counterTags.push(counterForTag)
            )
        );

        setgoodArrayTag(counterTags);
    }

    // Function to display section with tags
    function showGrid() {
        grid.style.display = "block";
        grid.style.opacity = "1";
        grid.style.maxHeight = grid.scrollHeight + "px";
        arrowshow.classList.add("active");
    }

    useEffect(() => {
        // HTML elements
        // I should use useRef but I would like check operation on the site with querySelector
        buttonTag = document.querySelectorAll(".yt__buttontag")!;
        grid = document.querySelector(".yt__tags")!;
        arrowshow = document.querySelector(".showtag__img")!;
    });

    useEffect(() => {
        // API AMBIENCE
        const apiambience: string = "https://apiforsa.herokuapp.com/read/onlyAMB";
        fetch(apiambience)
            .then((response) => response.json())
            .then((data) => {
                setthisArray(data.reverse());
                setmymusic(data);
            });
        // API AMBIENCE only tags
        const apiambiencetags = "https://apiforsa.herokuapp.com/read/tagsAMB";
        fetch(apiambiencetags)
            .then((response) => response.json())
            .then((data) => {
                setmytags(data);
                counterAll();
            });
        counterAll();
    }, []);
    useEffect(() => {
        counterAll();
    }, [thisArray, mymusic, mytags]);

    return (
        <>
            <Helmet>
                <title>Ambience</title>
                <meta
                    name="description"
                    content="Stereo recordings of various soundscapes featuring everday atmospheres and more exotic sound ambience. Sounds of white noise, rain, water waves, various fauna and flora and more, from different places on the world."
                />
            </Helmet>
            {BanerMemo}
            <div
                className="showtag"
                onClick={() => {
                    // Collapse
                    if (grid.style.display !== "block") {
                        showGrid();
                    } else {
                        grid.style.opacity = "0";
                        grid.style.maxHeight = "0px";
                        arrowshow.classList.remove("active");
                        setTimeout(() => {
                            grid.style.display = "none";
                        }, 400);
                    }
                }}
            >
                Tags <img className="showtag__img" src={arrow} alt="" />
            </div>
            <div>
                <div className="yt__tags">
                    {/* Tags */}
                    {mytags.map((tag: string, index: number) => (
                        <button
                            style={{
                                display: goodArrayTag[index] === 0 ? "none" : "",
                            }}
                            className="yt__buttontag"
                            key={index}
                            onClick={() => {
                                buttonTag[index].classList.toggle("activetag");

                                if (arrayTag.indexOf(tag) === -1) {
                                    arrayTag.push(tag);
                                } else {
                                    deleteTag = arrayTag.indexOf(tag);
                                    arrayTag.splice(deleteTag, 1);
                                }
                                console.log(arrayTag);
                                forforSA(mymusic, arrayTag, setthisArray);

                                window.scrollTo({
                                    top: 150,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            {tag}
                            <span>({goodArrayTag[index]})</span>
                        </button>
                    ))}
                </div>
                <div style={{ textAlign: "center", fontSize: "1.5em" }}>{!thisArray ? "Loading..." : ""}</div>
            </div>

            <div className="yt">
                <div className="yt__allcontainer">
                    {thisArray.map((music: forAmbience) => (
                        <>
                            <div className="yt__container" key={music.Id}>
                                <div className="yt__iframe">
                                    <div className="loading">
                                        <div className="loading__stripes">
                                            <div className="loading__stripe loading__stripe--first"></div>
                                            <div className="loading__stripe loading__stripe--second"></div>
                                            <div className="loading__stripe loading__stripe--third"></div>
                                        </div>
                                    </div>

                                    <iframe
                                        loading="lazy"
                                        src={music.iframe}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="yt__describe">
                                    <h4>{music.title}</h4>
                                    <div className="yt__describesmall">{music.describe}</div>
                                    {/* Tags under iframe */}
                                    <div className="yt__tag">
                                        {music.tag.map((tags) => (
                                            <div
                                                className="tag"
                                                onClick={() => {
                                                    showGrid();
                                                    arrayTag = [tags];

                                                    forforSA(mymusic, arrayTag, setthisArray);

                                                    mytags.forEach((arr: string, index: number) => {
                                                        buttonTag.forEach((el: HTMLElement) => {
                                                            el.classList.remove("activetag");
                                                        });
                                                        setTimeout(() => {
                                                            if (arr === tags) {
                                                                buttonTag[index].classList.add("activetag");
                                                            }
                                                        }, 50);
                                                    });

                                                    window.scrollTo(0, 0);
                                                }}
                                            >
                                                #{tags}{" "}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Ambience;
