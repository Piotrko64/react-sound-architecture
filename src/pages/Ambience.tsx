import React, {useState, useEffect} from 'react';
import '../styles/ambience.scss'
import ambienceback from '../img/Ambience2.webp'
import Baner from '../components/baner';
import arrow from '../img/arrow.png'

// import dataAmbience from "../jsonfolder/ambiencefiles.json";


  let arrayTag:Array<any>= [];
  let arrayTagFilter:Array<any>= [];
  let arrayTagFilterNew:Array<any>= [];

  let deleteTag:number;
  
  let i:number = 0;
  



  

function Ambience(): JSX.Element {
    let [mymusic, setmymusic] = useState<any[]>([]);
    let [thisArray, setthisArray] = useState<any[]>([]);
    let [mytags, setmytags] = useState<any[]>([]);
    let [type] = useState<string>('type');
    // Counter tags
    let counterTags: any = [];
    let counterForTag:number = 0;
    let thisForEachTag: any;
    let thisForEachMusic: any;
    let [goodArrayTag, setgoodArrayTag] = useState([]);
    function counterAll() {
        mytags.forEach((tag: number=1) => (
            counterForTag = 0,
            thisForEachTag = tag,


            thisArray.forEach((mus: any) => (
                thisForEachMusic = mus,
                // console.log(thisForEachMusic),
                // console.log("e"+thisForEachMusic.tag),
                // console.log(thisForEachTag.title),
                // console.log(thisForEachMusic.tag.indexOf(thisForEachTag.title)),
                thisForEachMusic.tag.indexOf(thisForEachTag.title) !== -1 ? counterForTag++ : false



            )),
            counterTags.push(counterForTag)

        ));


        setgoodArrayTag(counterTags);
        console.log(counterTags)
    }





    

    //   let [mytags, setmytags] = useState([]);
    //  API AMBIENCE TAGS
    // const apiambiencetags = 'http://piotrkosa12345.ct8.pl/jsonfolder/ambiencetags.json';
    // let mytags:any[];
    //   fetch(apiambiencetags)
    //   .then(response=>response.json())
    //   .then(data=> {
    //     mytags=data
    //     console.log(mytags)
    //   }
    //   );
    // let mymusic =[{
    //     Id: 0,
    //     iframe: "https://www.youtube.com/embed/Zh3JGIMWdnE",
    //     title: "White Noise, Waterfall, Nature Sounds, Sleep Sound",
    //     describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti aliquam modi nesciunt repudiandae?",
    //     data: "2021-06-09",
    //     tag: ['windy']
    //     },
    //     {
    //         Id: 1,
    //         iframe: "https://www.youtube.com/embed/9Z9xrHg5Szw",
    //         title: "Small Town Rain, Street Rain",
    //         describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
    //         data: "2021-06-09",
    //         tag: ['rain','windy','birds']
    //         },
    //         {
    //             Id: 2,
    //             iframe: "https://www.youtube.com/embed/E5LclqEUKO0",
    //             title: "Cicadas, Light wind, Water waves, Nature sounds",
    //             describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque veniam quisquam pariatur aspernatur cupiditate sequi nihil libero obcaecati perferendis, quos, corporis aliquam officiis quae aliquid. Esse aut quod est."
    //             ,
    //             data: "2021-06-09",
    //             tag: ['water','windy']
    //             }];
    
    // const mytags: any[] = [{
    //     id: 0,
    //     title: "windy"
    // },
    // {
    //     id: 1,
    //     title: "rain"
    // },
    // {
    //     id: 2,
    //     title: "water"
    // },
    // {
    //     id: 3,
    //     title: "town"
    // },
    // {
    //     id: 4,
    //     title: "harbours"
    // },
    // {
    //     id: 5,
    //     title: "birds"
    // },

    // {
    //     id: 6,
    //     title: "marina"
    // },
    // {
    //     id: 7,
    //     title: "street"
    // },

    // {
    //     id: 8,
    //     title: "light"
    // },


    // {
    //     id: 9,
    //     title: "day"
    // },


    // {
    //     id: 10,
    //     title: "night"
    // },
    // ] as any;
 
    

    // let [TextShow, setTextShow] = useState(`Tags<img src=${arrow}/>`);
    let buttonTag: any;
    let showGrid: any;
    let grid: any;
    let arrowshow: any;






    useEffect(() => {
        buttonTag = document.querySelectorAll('.yt__buttontag')!;
        showGrid = document.querySelector('.showtag')!;
        grid = document.querySelector('.yt__tags')!;
        arrowshow = document.querySelector('.showtag__img');






    });

    useEffect(() => {
        const apiambience = 'https://apiforsa.herokuapp.com/read/onlyAMB';
    

        fetch(apiambience)
            .then(response => response.json())
            .then(data => {
                
                    setthisArray(data.reverse());
                    setmymusic(data);
                   
            }
            );

            const apiambiencetags = 'https://apiforsa.herokuapp.com/read/tagsAMB';
    

        fetch(apiambiencetags)
            .then(response => response.json())
            .then(data => {
                
                    setmytags(data);
                    console.log(data)
                   counterAll();
                
            }
            );
            counterAll();
    },[type]);
useEffect(()=>{

    


    counterAll();

},[thisArray, mymusic, mytags])


    
    

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
            } }>Tags <img className="showtag__img" src={arrow} /></div>
            <div className="yt__tags">

                {/* <button className="yt__buttontag yt__Allbutton" onClick={()=>{
                setthisArray(mymusicDuplicate);
                arrayTag=[];
                arrayTagFilterNew=[];
                setthisArray(mymusicDuplicate);
                
                buttonTag.forEach((el:any) => {
                    el.classList.remove('activetag');
                });
                allButton.classList.add('activetag')
            }}>
All
            </button> */}


                {mytags.map((tag: any) => (
                    <>
                        <button style={{display: goodArrayTag[tag.id]===0?  "none" : ""}}className="yt__buttontag" key={tag.id} onClick={() => {

                            buttonTag[tag.id].classList.toggle('activetag');
                            
                            if (arrayTag.indexOf(tag.title) === -1) {
                                arrayTag.push(tag.title);
                                // allButton.classList.remove('activetag');
                            }
                            else {
                                deleteTag = arrayTag.indexOf(tag.title);

                                arrayTag.splice(deleteTag, 1);
                            }




                            arrayTagFilterNew = mymusic.filter(ar => {
                                for (i = 0; i <= arrayTag.length; i++) {
                                    if (ar.tag.indexOf(arrayTag[i]) >= 0) {
                                        return true;
                                    }
                                }



                            });

                            if (arrayTag.length > 0) {
                                arrayTagFilterNew = arrayTagFilterNew.concat(arrayTagFilter);
                                setthisArray(arrayTagFilterNew);
                                
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

                        } }> {tag.title}<span>({goodArrayTag[tag.id]})</span></button>
                    </>
                ))}
            </div>
            <div className="yt">
                {/* <div className="yt__describe describealign ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laboriosam ex nisi qui doloribus! Dolorum est et unde magni eaque quis quaerat impedit quas maiores voluptate, similique recusandae dolore? Atque.
            </div> */}




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
                            <h3>{music.title}</h3>
                            <div className="yt__describesmall">{music.describe}</div>
                            <div className="yt__tag">{music.tag.map((tags) => (<div className="tag" onClick={() => {

                                arrayTag = [tags];

                                arrayTagFilterNew = mymusic.filter(ar => {
                                    for (i = 0; i <= arrayTag.length; i++) {
                                        if (ar.tag.indexOf(arrayTag[i]) >= 0) {
                                            return true;
                                        }
                                    }


                                });

                                arrayTagFilterNew = arrayTagFilterNew.concat(arrayTagFilter);
                                arrayTagFilterNew = arrayTagFilterNew.reverse();

                                mytags.forEach((arr: any, index: any) => {
                                    buttonTag.forEach((el: any) => {
                                        el.classList.remove('activetag');
                                    });
                                    setTimeout(() => {
                                        if (arr.title === arrayTag[0]) {
                                            buttonTag[index].classList.add('activetag');

                                        }
                                    }, 2);

                                });

                                // buttonTag[].classList.toggle('activetag');
                                arrayTagFilterNew = arrayTagFilterNew.reverse();
                                setthisArray(arrayTagFilterNew);




                                window.scrollTo(0, 0);
                            } }>#{tags} </div>))}</div>
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
function activetag(activetag: any) {
    throw new Error('Function not implemented.');
}

function res(res: any): ((reason: any) => PromiseLike<never>) | null | undefined {
    throw new Error('Function not implemented.');
}

