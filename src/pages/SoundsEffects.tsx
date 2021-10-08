import React, { useEffect, useState } from 'react';
import Baner from '../components/baner';
import '../styles/Sounds.scss';
import '../styles/loading.scss';
import arrow from '../img/arrow.png'
import soundback from '../img/piano.webp'
let arrayTag:any= [];
  let arrayTagFilter:any= [];
  let arrayTagFilterNew:any= [];
  let deleteTag;
  let i = 0;

// // API SOUNDS


// const apisounds = 'http://piotrkosa12345.ct8.pl/jsonfolder/soundsfiles.json';
// let sounds:any[];

// fetch(apisounds)
// .then(response=>response.json())
// .then(data=> 
//     sounds=data
// );


// //  API SOUNDS TAGS



// const apiambiencetags = 'http://piotrkosa12345.ct8.pl/jsonfolder/soundstags.json';
// let mytags:any[];

// fetch(apiambiencetags)
// .then(response=>response.json())
// .then(data=> {
//   mytags=data
//   console.log(mytags)
// }
    
// );

const SoundsEffects = () => {
    const sounds =[{
        Id: 6,
        iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
        href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
        title: "Windy Marina Ambience",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti aliquam modi nesciunt repudiandae?",
        data: "2021-06-45",
        tag: ['windy','marina']
        },
        {
            Id: 5,
            iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
            title: "Small Town Rain, Street Rain",
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
            data: "2021-06-09",
            tag: ['rain','town']
            }
            ,
            {
                Id: 4,
                iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                title: "Small Town Rain, Street Rain",
                describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                data: "2021-06-09",
                tag: ['rain','town','rain']
                }
                ,
                {
                    Id: 3,
                    iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                    href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                    title: "Small Town Rain, Street Rain",
                    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                    data: "2021-06-09",
                    tag: ['rain', 'town' , 'street']
                    }
                    ,
                    {
                        Id: 2,
                        iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                        href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                        title: "Small Town Rain, Street Rain",
                        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                        data: "2021-06-09",
                        tag: ['rain', 'town' , 'street']
                        }
                        ,
                        {
                            Id: 1,
                            iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                            href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                            title: "Small Town Rain, Street Rain",
                            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                            data: "2021-06-09",
                            tag: ['rain', 'harbours' , 'street']
                            }
                            ,
                            {
                                Id: 0,
                                iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                                href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                                title: "Small Town Rain, Street Rain",
                                describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                                data: "2021-06-09",
                                tag: ['rain', 'town' , 'birds']
                                }];
                                const mytags=[{
                                    id: 0,
                                    title: "windy"
                                },
                                {
                                    id: 1,
                                    title: "rain"
                                },
                                {
                                    id: 2,
                                    title: "water"
                                },
                                {
                                    id: 3,
                                    title: "town"
                                },
                                {
                                    id: 4,
                                    title: "harbours"
                                },
                                {
                                    id: 5,
                                    title: "birds"
                                },
                                
                                {
                                    id: 6,
                                    title: "marina"
                                },
                                {
                                    id: 7,
                                    title: "street"
                                },
                                
                                {
                                    id: 8,
                                    title: "light"
                                },
                                
                                
                                {
                                    id: 9,
                                    title: "day"
                                },
                                
                                
                                {
                                    id: 10,
                                    title: "night"
                                },
                            ];
                            let [thisArray, setthisArray] = useState(sounds);
                            

            
                            let buttonTag:any;
                            let allButton: any;
                            let showGrid:any;
                            let grid:any;
                            let arrowshow:any;
                            const mymusicDuplicate = [...sounds];
                            let counterTags:number[]=[];
           let counterForTag=0;
           let thisForEachTag:any;
           let thisForEachMusic:any;
           let goodArrayTag:any=[]
           mytags.forEach((tag:any=0)=>(
            counterForTag=0,
            thisForEachTag=tag,
            
               
               sounds.forEach((mus:any)=>(
                thisForEachMusic=mus,
                // console.log(thisForEachMusic),
                // console.log("e"+thisForEachMusic.tag),
                // console.log(thisForEachTag.title),
                // console.log(thisForEachMusic.tag.indexOf(thisForEachTag.title)),
                
                thisForEachMusic.tag.indexOf(thisForEachTag.title)!==-1 ? counterForTag++ : false
                ,console.log(counterForTag)

                   
               )),
               counterTags.push(counterForTag),
               console.log(counterTags)
           ))
           
           console.log(counterTags);
           goodArrayTag=counterTags;
                             useEffect(() => {
                                buttonTag= document.querySelectorAll('.Sound__buttontag');
                               
                                showGrid= document.querySelector('.showtag')!;
                                grid= document.querySelector('.Sounds__tags')!;
                                arrowshow = document.querySelector('.showtag__img');
                 })
    return (

        <>
        
            <Baner title="Sounds Effects" image={soundback}/>
            <div className="showtag" onClick={()=>{
            
            
            if(grid.style.display!=="grid"){
            grid.style.display="grid";
            grid.style.opacity="1";
            grid.style.maxHeight=grid.scrollHeight+"px";
            arrowshow.classList.add('active')
               
                
            }
else{

    grid.style.opacity="0";
    grid.style.maxHeight="0px";
    arrowshow.classList.remove('active')
    setTimeout(()=>{
        grid.style.display="none";
    },400)
}
        }}>Tags <img className="showtag__img"src={arrow}/></div>
        <div className="Sounds padding">
            <div className="Sounds__tags">
                
            {
                        mytags.map(tag=>(
                            <>
                            <button className="Sound__buttontag" key={tag.id} onClick={ () => {
                            buttonTag[tag.id].classList.toggle('activetag');
                            
                            if(arrayTag.indexOf(tag.title)===-1){
                                arrayTag.push(tag.title);
                                
                            }
                            else{
                                deleteTag = arrayTag.indexOf(tag.title);
                                
                                arrayTag.splice(deleteTag,1);
                            }
                            
                            
                            
                           
                            arrayTagFilterNew=sounds.filter( ar =>{
                                for( i=0; i<=arrayTag.length ;i++){
                                    if(ar.tag.indexOf(arrayTag[i])>=0){
                                        return true;
                                    }
                                }
                            
                                

                            });
                            
                            if(arrayTag.length>0){
                                arrayTagFilterNew=arrayTagFilterNew.concat(arrayTagFilter);
                                
                                setthisArray(arrayTagFilterNew);
                            }
                            else{
                                
setthisArray(sounds)
                            }
                            
                            
                            
                            
                            window.scrollTo(
                                {
                                    top: 150,
                                    behavior: 'smooth'
                                    
                                  }
                            )}}>{tag.title}<span>({goodArrayTag[tag.id]})</span></button>
                            </>
                        ))
                    }
            </div>
            {/* <div className="Sounds__describe describealign">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa natus, placeat optio est aperiam facere praesentium harum possimus, ad temporibus sapiente dolorum, enim repellendus in! Ut facere pariatur dolore!
            </div> */}
            <div className="Sounds__grid">
{thisArray.map( (sound:any)=>(
    <div className="Sounds__one">
        
    <div className="loading"> 
    <div className="loading__stripes">
    <div className="loading__stripe loading__stripe--first"></div>
    <div className="loading__stripe loading__stripe--second"></div>
    <div className="loading__stripe loading__stripe--third"></div>
    </div>
    </div>
    <iframe style={{ border: "0"}} loading="lazy" src={sound.iframe}seamless><a href={sound.href}>{sound.title} </a></iframe>
    {/* <div className="Sounds__describe">{
        sound.title
    }<br/>
    {
        sound.data
    }
    {
        // <div className="Sounds__tag">{
        //     sound.tag.map((thistag:any)=>(
        //         <div>#{thistag}</div>
        //     ))
        // }
        
        // </div>
        
    }
    </div> */}
</div>
)
    
)}

            </div>
            
        </div>
        </>
    );
}

export default SoundsEffects;
