import { useEffect, useMemo, useState } from "react";
import Baner from "../components/baner";

import arrow from "../img/arrow.png";
import soundback from "../img/SFX.webp";
import { Helmet } from "react-helmet";
import { forSounds } from "../typing/datatype";
import { forforSA } from "./functions/forforSA";

//Selected user tags
let arrayTag: Array<string> = [];
let deleteTag: number;

const SoundsEffects = () => {
    // useState
    let [sounds, setsounds] = useState<forSounds[]>([]); // original array iframes
    let [thisArray, setthisArray] = useState<forSounds[]>([]); // array to manipulate

    let [mytags, setmytags] = useState<string[]>([]); //original array of tags
    let [goodArrayTag, setgoodArrayTag] = useState<Array<number>>([]); // array tags to manipulate

    // Html elements
    let buttonTag: NodeListOf<HTMLButtonElement>;
    let grid: HTMLElement;
    let arrowshow: HTMLElement;

    // Others
    let counterTags: Array<number> = []; //Array to counting iframes
    let counterForTag: number = 0; // let to counting single
    let thisForEachTag: string; // let for one tag
    let thisForEachMusic: forSounds;

    //Baner usememo
    const BanerMemo = useMemo(() => <Baner title="Sound Libraries" image={soundback} />, []);
    // Function for counting iframes
    function counterAll() {
        mytags.forEach(
            (tag: string) => (
                (counterForTag = 0),
                (thisForEachTag = tag),
                thisArray.forEach(
                    (mus: forSounds) => (
                        (thisForEachMusic = mus), thisForEachMusic.tag.indexOf(thisForEachTag) !== -1 ? counterForTag++ : false
                    )
                ),
                counterTags.push(counterForTag)
            )
        );

        setgoodArrayTag(counterTags);
    }

    useEffect(() => {
        // HTML elements
        // I should use useRef but I would like check operation on the site with querySelector

        buttonTag = document.querySelectorAll(".Sound__buttontag");
        grid = document.querySelector(".Sounds__tags")!;
        arrowshow = document.querySelector(".showtag__img")!;
    });

    useEffect(() => {
        // API SE
        const apisounds: string = "https://apiforsa.herokuapp.com/read/onlySE";
        fetch(apisounds)
            .then((response) => response.json())
            .then((data) => {
                setthisArray(data.reverse());
                setsounds(data);
            });
        // API SE but only tags
        const apiambiencetags: string = "https://apiforsa.herokuapp.com/read/tagsSE";
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
    }, [thisArray, sounds, mytags]);

    return (
        <>
            <Helmet>
                <title>Sound Effects</title>
                <meta
                    name="description"
                    content="Field recordings and foley shared on royalty free license on bandcamp. All the audio is recorded on 96/24 stereo standard. Libraries contain wide variety od sounds featuring movement, impact, swish, designed sounds and more. All tracks have metadata and are described with UCS - Universal Category System."
                />
            </Helmet>
            {BanerMemo}
            <div
                className="showtag"
                onClick={() => {
                    // Collapse effect
                    if (grid.style.display !== "block") {
                        grid.style.display = "block";
                        grid.style.opacity = "1";
                        grid.style.maxHeight = grid.scrollHeight + "px";
                        arrowshow.classList.add("active");
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

            <div className="Sounds padding">
                <div className="Sounds__tags">
                    {/* Display tags */}

                    {mytags.map((tag: string, index: number) => (
                        <button
                            style={{
                                display: goodArrayTag[index] === 0 ? "none" : "",
                            }}
                            className="Sound__buttontag"
                            key={index}
                            onClick={() => {
                                buttonTag[index].classList.toggle("activetag");

                                if (arrayTag.indexOf(tag) === -1) {
                                    arrayTag.push(tag);
                                } else {
                                    deleteTag = arrayTag.indexOf(tag);
                                    arrayTag.splice(deleteTag, 1);
                                }

                                // Search Tags
                                let counterToPush: number = 0;
                                let arrayToPush: Array<forSounds> = [];

                                console.log(arrayTag);
                                // // "for-for SA"
                                forforSA(sounds, arrayTag, setthisArray);

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
                <div className="Sounds__grid">
                    {thisArray.map((sound: forSounds) => (
                        <div className="Sounds__one">
                            <div className="loading">
                                {/* Loading with css */}
                                <div className="loading__stripes">
                                    <div className="loading__stripe loading__stripe--first"></div>
                                    <div className="loading__stripe loading__stripe--second"></div>
                                    <div className="loading__stripe loading__stripe--third"></div>
                                </div>
                            </div>
                            <iframe title={sound.iframe} style={{ border: "0" }} loading="lazy" src={sound.iframe} seamless>
                                <a href={sound.href}>{sound.title} </a>
                            </iframe>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SoundsEffects;
