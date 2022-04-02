import { useEffect, useMemo, useState, useRef } from "react";

import Baner from "../components/microComponents/baner";
import arrow from "../img/arrow.png";
import soundback from "../img/SFX.webp";
import { Helmet } from "react-helmet";
import { forSounds } from "../types/datatype";
import { forforSA } from "./functions/forforSA";
import { showGrid } from "./functions/showGrid";
import SoundFrame from "../components/microComponents/SoundFrame";
import { counterAll } from "./functions/counterAll";
import { tagsSE } from "../data/dataApi/api";

//Selected user tags
let arrayTag: Array<string> = [];
let deleteTag: number;

const SoundsEffects = () => {
    // useState
    const [sounds, setsounds] = useState<forSounds[]>([]); // original array iframes
    const [thisArray, setthisArray] = useState<forSounds[]>([]); // array to manipulate

    const [mytags, setmytags] = useState<string[]>([]); //original array of tags
    const [goodArrayTag, setgoodArrayTag] = useState<Array<number>>([]); // array tags to manipulate

    const [error, seterror] = useState<Boolean>(false);

    // useRef
    const buttonTagC = useRef<Array<any>>([])!;
    const buttonTag = buttonTagC.current!;
    const gridYTC = useRef<HTMLDivElement>(null)!;
    const gridYT = gridYTC.current!;
    const arrowRefC = useRef<HTMLImageElement>(null)!;
    const arrowRef = arrowRefC.current!;

    //Baner usememo
    const BanerMemo = useMemo(() => <Baner title="Sound Libraries" image={soundback} />, []);

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
        forforSA(sounds, arrayTag, setthisArray);

        window.scrollTo({
            top: 150,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        // API SE
        const apisounds: string = "https://apiforsa.herokuapp.com/read/onlySE";
        fetch(apisounds)
            .then((response) => response.json())
            .catch(() => {
                seterror(true);
            })
            .then((data) => {
                setthisArray(data.reverse());
                setsounds(data);
            });
        // API SE but only tags

        fetch(tagsSE)
            .then((response) => response.json())
            .then((data) => {
                setmytags(data);
                counterAll(mytags, thisArray, setgoodArrayTag);
            });
        counterAll(mytags, thisArray, setgoodArrayTag);
    });
    useEffect(() => {
        counterAll(mytags, thisArray, setgoodArrayTag);
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
                    showGrid(true, gridYT, arrowRef);
                }}
            >
                Tags <img className="showtag__img" src={arrow} alt="" ref={arrowRefC} />
            </div>

            <div className="Sounds padding">
                <div className="Sounds__tags" ref={gridYTC}>
                    {/* Display tags */}

                    {mytags.map((tag: string, index: number) => (
                        <button
                            style={{
                                display: goodArrayTag[index] === 0 ? "none" : "",
                            }}
                            className="Sound__buttontag"
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
                    {thisArray.length === 0 && "Loading..."}
                </div>
                {error && <div style={{ textAlign: "center" }}>Opss...We have problem to fetch a data!</div>}
                <div className="Sounds__grid">
                    {thisArray.map((sound: forSounds) => (
                        <SoundFrame sound={sound} key={sound.Id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SoundsEffects;
