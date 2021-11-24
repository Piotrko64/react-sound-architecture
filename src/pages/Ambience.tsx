import React, { useState, useEffect } from 'react';
import '../styles/ambience.scss'
import ambienceback from '../img/Ambience2.webp'
import Baner from '../components/baner';
import arrow from '../img/arrow.png'

let arrayTag: Array<any> = [];
let deleteTag: number;
let i: number = 0;

function Ambience(): JSX.Element {
    let [mymusic, setmymusic] = useState<any[]>([]);
    let [thisArray, setthisArray] = useState<any[]>([]);
    let [mytags, setmytags] = useState<any[]>([]);
    let [type] = useState<string>('type');
    // Counter tags
    let counterTags: any = [];
    let counterForTag: number = 0;
    let thisForEachTag: any;
    let thisForEachMusic: any;
    let arrayToPush: any = [];
    let counterToPush = 0;
    let [goodArrayTag, setgoodArrayTag] = useState([]);
    function counterAll() {
        mytags.forEach((tag: number = 1) => (
            counterForTag = 0,
            thisForEachTag = tag,


            thisArray.forEach((mus: any) => (
                thisForEachMusic = mus,

                thisForEachMusic.tag.indexOf(thisForEachTag) !== -1 ? counterForTag++ : false

            )),
            counterTags.push(counterForTag)

        ));

        setgoodArrayTag(counterTags);

    }


    let buttonTag: any;
    let showGrid: any;
    let grid: any;
    let arrowshow: any;
    let originScrollGrid: String;


    useEffect(() => {
        buttonTag = document.querySelectorAll('.yt__buttontag')!;
        showGrid = document.querySelector('.showtag')!;
        grid = document.querySelector('.yt__tags')!;
        arrowshow = document.querySelector('.showtag__img');
        originScrollGrid = grid.scrollHeight + "px"

    });

    useEffect(() => {
        // API AMBIENCE
        const apiambience = 'https://apiforsa.herokuapp.com/read/onlyAMB';
        fetch(apiambience)
            .then(response => response.json())
            .then(data => {

                setthisArray(data.reverse());
                setmymusic(data);

            }
            );
        // API AMBIENCE only tags
        const apiambiencetags = 'https://apiforsa.herokuapp.com/read/tagsAMB';
        fetch(apiambiencetags)
            .then(response => response.json())
            .then(data => {

                setmytags(data);
                counterAll();

            }
            );
        counterAll();
    }, [type]);
    useEffect(() => {
        counterAll();

    }, [thisArray, mymusic, mytags])

    return (

        <>

            <Baner title="Ambience" image={ambienceback} />
            <div className="showtag" onClick={() => {

                if (grid.style.display !== "block") {
                    // zmiana strzałki
                    grid.style.display = "block";
                    grid.style.opacity = "1";
                    grid.style.maxHeight = grid.scrollHeight + "px";
                    arrowshow.classList.add('active');

                }
                else {

                    grid.style.opacity = "0";
                    grid.style.maxHeight = "0px";
                    arrowshow.classList.remove('active');
                    setTimeout(() => {
                        grid.style.display = "none";
                    }, 400);
                }
            }}>Tags <img className="showtag__img" src={arrow} /></div>
            <div> <div className="yt__tags">



                {mytags.map((tag: any, index: number) => (
                    <>
                        <button style={{ display: goodArrayTag[index] === 0 ? "none" : "" }} className="yt__buttontag" key={index} onClick={() => {

                            buttonTag[index].classList.toggle('activetag');

                            if (arrayTag.indexOf(tag) === -1) {
                                arrayTag.push(tag);

                            }
                            else {
                                deleteTag = arrayTag.indexOf(tag);
                                arrayTag.splice(deleteTag, 1);
                            }



                            // BETTER SEARCH


                            for (let a = 0; a <= mymusic.length - 1; a++) {

                                counterToPush = 0;
                                for (let i = 0; i <= arrayTag.length - 1; i++) {

                                    if (mymusic[a].tag.indexOf(arrayTag[i]) !== -1) {
                                        counterToPush++;

                                    }
                                    if (counterToPush === arrayTag.length) {


                                        arrayToPush.push(mymusic[a]);
                                    }
                                }

                            }





                            if (arrayTag.length > 0) {
                                setthisArray(arrayToPush);
                            }
                            else {
                                setthisArray(mymusic);
                            }


                            window.scrollTo(
                                {
                                    top: 150,
                                    behavior: 'smooth'
                                }
                            );

                        }}> {tag}<span>({goodArrayTag[index]})</span></button>
                    </>
                ))}
            </div></div>
            <div className="yt">
                <div className="yt__allcontainer">
                    {thisArray.map((music: { Id: React.Key | null | undefined; iframe: string | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; describe: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; tag: any[]; }) => (<><div className="yt__container" key={music.Id}>
                        <div className="yt__iframe">

                            <div className="loading">
                                <div className="loading__stripes">
                                    <div className="loading__stripe loading__stripe--first"></div>
                                    <div className="loading__stripe loading__stripe--second"></div>
                                    <div className="loading__stripe loading__stripe--third"></div>
                                </div>
                            </div>

                            <iframe loading="lazy" src={music.iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        </div>
                        <div className="yt__describe">
                            <h4>{music.title}</h4>
                            <div className="yt__describesmall">{music.describe}</div>
                            <div className="yt__tag">{music.tag.map((tags) => (<div className="tag" onClick={() => {

                                arrayTag = [tags]

                                for (let a = 0; a <= mymusic.length - 1; a++) {

                                    counterToPush = 0;
                                    for (let i = 0; i <= arrayTag.length - 1; i++) {

                                        if (mymusic[a].tag.indexOf(arrayTag[i]) !== -1) {
                                            counterToPush++;
                                        }
                                        if (counterToPush === arrayTag.length) {
                                            arrayToPush.push(mymusic[a]);
                                        }
                                    }

                                }
                                setthisArray(arrayToPush);
                                mytags.forEach((arr: any, index: any) => {

                                    buttonTag.forEach((el: any) => {
                                        el.classList.remove('activetag');
                                    });
                                    setTimeout(() => {

                                        if (arr === tags) {
                                            buttonTag[index].classList.add('activetag');

                                        }
                                    }, 200);

                                });


                                window.scrollTo(0, 0);
                            }}>#{tags} </div>))}</div>
                        </div>

                    </div></>)
                    )}
                    <div className="padding">

                    </div>

                </div>
            </div>
        </>
    );
}

export default Ambience;


