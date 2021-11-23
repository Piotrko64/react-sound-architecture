import React, {useState, useEffect} from 'react';
import '../styles/ambience.scss'
import ambienceback from '../img/Ambience2.webp'
import Baner from '../components/baner';
import arrow from '../img/arrow.png'

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
                
                thisForEachMusic.tag.indexOf(thisForEachTag) !== -1 ? counterForTag++ : false



            )),
            counterTags.push(counterForTag)

        ));


        setgoodArrayTag(counterTags);
        console.log(counterTags)
    }


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



                {mytags.map((tag: any, index: number) => (
                    <>
                        <button style={{display: goodArrayTag[index]===0?  "none" : ""}}className="yt__buttontag" key={index} onClick={() => {

                            buttonTag[index].classList.toggle('activetag');
                            
                            if (arrayTag.indexOf(tag) === -1) {
                                arrayTag.push(tag);
                                // allButton.classList.remove('activetag');
                            }
                            else {
                                deleteTag = arrayTag.indexOf(tag);

                                arrayTag.splice(deleteTag, 1);
                            }




                            arrayTagFilterNew = mymusic.filter(ar => {
                                for (i = 0; i <= arrayTag.length; i++) {
                                    if (ar.tag.indexOf(arrayTag[i]) >= 0) {
                                        return true;
                                    }
                                }
                            });
                                // BETTER SEARCH
                                let counterToPush=0;
                                let arrayToPush:any=[]; 
                                for(let a=0; a<=mymusic.length-1; a++){
                                    
                                    counterToPush=0;
                                    for(let i=0; i<=arrayTag.length-1; i++){
                                        
                                        if(mymusic[a].tag.indexOf(arrayTag[i])!==-1) 
                                        {
                                            counterToPush++;
                                            
                                        }
                                        if(counterToPush===arrayTag.length){

                                            
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

                        } }> {tag}<span>({goodArrayTag[index]})</span></button>
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

                               
                                let arrayTagSpan = tags;
                                arrayTagFilterNew = mymusic.filter(ar => {
                                    for (let i = 0; i <= arrayTagSpan.length; i++) {
                                        if (ar.tag.indexOf(arrayTagSpan) >= 0) {
                                            console.log(ar.tag,',,,',arrayTagSpan)
                                            return true;
                                        }
                                    }

                                        
                                });
                                setthisArray(arrayTagFilterNew)



                                mytags.forEach((arr: any, index: any) => {

                                    buttonTag.forEach((el: any) => {
                                        el.classList.remove('activetag');
                                    });
                                    setTimeout(() => {
                                        // console.log(arr,arrayTagSpan)
                                        if (arr === arrayTagSpan) {
                                            buttonTag[index].classList.add('activetag');

                                        }
                                    }, 2);

                                });

                                




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

