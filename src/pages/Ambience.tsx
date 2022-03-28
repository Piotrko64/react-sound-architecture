import { useState, useEffect, useMemo, useRef } from "react";

import ambienceback from "../img/ambience.webp";
import arrow from "../img/arrow.png";
import Baner from "../components/microComponents/baner";

import { Helmet } from "react-helmet";
import { dataMusic } from "../types/dataMusic.interface";
import { forforSA } from "./functions/forforSA";

import { showGrid } from "./functions/showGrid";
import AmbienceFrame from "../components/microComponents/AmbienceFrame";
import { counterAll } from "./functions/counterAll";
import { AMB, tagsAMB } from "../data/dataApi/api";

//Selected user tags
let arrayTag: Array<string> = [];
let deleteTag: number;

function Ambience(): JSX.Element {
    // useState
    const [myMusic, setMyMusic] = useState<dataMusic[]>([]); // original array iframes
    const [thisArray, setThisArray] = useState<dataMusic[]>([]); // array to manipulate
    const [error, setError] = useState<Boolean>(false);
    const [myTags, setMyTags] = useState<string[]>([]);
    const [goodArrayTag, setGoodArrayTag] = useState<Array<number>>([]);

    // UseRef
    const buttonTagC = useRef<Array<any>>([])!;
    const buttonTag = buttonTagC.current!;
    const gridYTC = useRef<HTMLDivElement>(null)!;
    const gridYT = gridYTC.current!;
    const arrowRefC = useRef<HTMLImageElement>(null)!;
    const arrowRef = arrowRefC.current!;

    //Baner usememo
    const BanerMemo = useMemo(() => <Baner title="Ambience" image={ambienceback} />, []);

    // Functions
    function chooseButton(tag: string, index: number) {
        buttonTag[index].classList.toggle("activetag");

        if (arrayTag.indexOf(tag) === -1) {
            arrayTag.push(tag);
        } else {
            deleteTag = arrayTag.indexOf(tag);
            arrayTag.splice(deleteTag, 1);
        }
        console.log(arrayTag);
        forforSA(myMusic, arrayTag, setThisArray);

        window.scrollTo({
            top: 150,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        // API AMBIENCE
        const apiambience: string = AMB;
        fetch(apiambience)
            .then((response) => response.json())
            .catch(() => {
                setError(true);
            })
            .then((data) => {
                setThisArray(data.reverse());
                setMyMusic(data);
                console.clear();
            });
        // API AMBIENCE only tags
        const apiambiencetags: string = tagsAMB;
        fetch(apiambiencetags)
            .then((response) => response.json())
            .catch(() => {
                setError(true);
            })
            .then((data) => {
                setMyTags(data);
                counterAll(myTags, thisArray, setGoodArrayTag);
            });

        counterAll(myTags, thisArray, setGoodArrayTag);
    }, [myTags, thisArray]);
    useEffect(() => {
        counterAll(myTags, thisArray, setGoodArrayTag);
    }, [thisArray, myMusic, myTags]);

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
                    showGrid(true, gridYT, arrowRef);
                }}
            >
                Tags <img className="showtag__img" src={arrow} alt="" ref={arrowRefC} />
            </div>
            {error ? <div style={{ textAlign: "center" }}>Opss...We have problem to fetch a data!</div> : ""}
            <div>
                <div className="yt__tags" ref={gridYTC}>
                    {/* Tags */}
                    {myTags.map((tag: string, index: number) => (
                        <button
                            style={{
                                display: goodArrayTag[index] === 0 ? "none" : "",
                            }}
                            className="yt__buttontag"
                            key={tag}
                            ref={(el) => (buttonTagC.current[index] = el)}
                            onClick={() => {
                                chooseButton(tag, index);
                            }}
                        >
                            {tag}
                            <span>({goodArrayTag[index]})</span>
                        </button>
                    ))}
                </div>
                <div style={{ textAlign: "center", fontSize: "1.5em" }}>
                    {thisArray === [] ? "Loading..." : ""}
                </div>
            </div>

            <div className="yt">
                <div className="yt__allcontainer">
                    {thisArray.map((music: dataMusic) => (
                        <AmbienceFrame
                            key={music.id}
                            music={music}
                            showGrid={() => {
                                showGrid(false, gridYT, arrowRef);
                            }}
                            forforSA={() => {
                                forforSA(myMusic, arrayTag, setThisArray);
                            }}
                            myTags={myTags}
                            arrayTag={(e) => {
                                arrayTag = [e];
                            }}
                            buttonTag={buttonTag}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Ambience;
