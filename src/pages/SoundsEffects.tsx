import React, { useEffect, useState } from 'react';
import Baner from '../components/baner';
import '../styles/Sounds.scss';
import imgmusic from '../img/background.jpg'
let arrayTag:any= [];
  let arrayTagFilter:any= [];
  let arrayTagFilterNew:any= [];
  let deleteTag;
  let i = 0;
const SoundsEffects = () => {
    const sounds =[{
        Id: 1,
        iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
        href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
        title: "Windy Marina Ambience",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti aliquam modi nesciunt repudiandae?",
        data: "2021-06-45",
        tag: ['windy','marina']
        },
        {
            Id: 2,
            iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
            title: "Small Town Rain, Street Rain",
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
            data: "2021-06-09",
            tag: ['rain','town']
            }
            ,
            {
                Id: 3,
                iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                title: "Small Town Rain, Street Rain",
                describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                data: "2021-06-09",
                tag: ['rain','town','rain']
                }
                ,
                {
                    Id: 4,
                    iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                    href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                    title: "Small Town Rain, Street Rain",
                    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                    data: "2021-06-09",
                    tag: ['rain', 'town' , 'street']
                    }
                    ,
                    {
                        Id: 5,
                        iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                        href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                        title: "Small Town Rain, Street Rain",
                        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                        data: "2021-06-09",
                        tag: ['rain', 'town' , 'street']
                        }
                        ,
                        {
                            Id: 6,
                            iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
                            href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
                            title: "Small Town Rain, Street Rain",
                            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
                            data: "2021-06-09",
                            tag: ['rain', 'harbours' , 'street']
                            }
                            ,
                            {
                                Id: 7,
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
                            let [TextShow, setTextShow] = useState("Show Tags");

            
                            let buttonTag:any;
                            let allButton: any;
                            let showGrid:any;
                            let grid:any;
                            const mymusicDuplicate = [...sounds];
                             useEffect(() => {
                                buttonTag= document.querySelectorAll('.Sound__buttontag');
                                allButton = document.querySelector('.Sound__buttontag');
                                showGrid= document.querySelector('.showtag')!;
                                grid= document.querySelector('.Sounds__tags')!;
                 })
    return (

        <>
        
            <Baner title="Sounds Effects"/>
            <div className="showtag" onClick={()=>{
            TextShow==="Show Tags" ? setTextShow("Hide Tags") : setTextShow("Show Tags")
            
            if(grid.style.display!=="grid"){
            grid.style.display="grid";
            grid.style.opacity="1";
            grid.style.maxHeight=grid.scrollHeight+"px";
               
                
            }
else{

grid.style.opacity="0";
grid.style.maxHeight="0px";
setTimeout(()=>{
    grid.style.display="none";
},400)
}
        }}>{TextShow}</div>
        <div className="Sounds padding">
            <div className="Sounds__tags">
                
            {
                        mytags.map(tag=>(
                            <>
                            <button className="Sound__buttontag" key={tag.id} onClick={ () => {
                            buttonTag[tag.id].classList.toggle('activetag');
                            
                            if(arrayTag.indexOf(tag.title)===-1){
                                arrayTag.push(tag.title);
                                allButton.classList.remove('activetag');
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
                            
                           arrayTagFilterNew=arrayTagFilterNew.concat(arrayTagFilter);
                            
                            
                            
                            setthisArray(arrayTagFilterNew);
                            
                            window.scrollTo(
                                {
                                    top: 150,
                                    behavior: 'smooth'
                                    
                                  }
                            )}}> {tag.title} </button>
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
    <iframe style={{ border: "0", width: "350px", height: "350px"}} src={sound.iframe}seamless><a href={sound.href}>{sound.title} </a></iframe>
    <div className="Sounds__describe">{
        sound.title
    }<br/>
    {
        sound.data
    }
    {
        <div className="Sounds__tag">{
            sound.tag.map((thistag:any)=>(
                <div>#{thistag}</div>
            ))
        }
        
        </div>
        
    }
    </div>
</div>
)
    
)}

            </div>
            <div className="padding">
           {/* {arrayTag.length===0 ? setthisArray(mymusicDuplicate) : false} */}

                {thisArray.length===0 ? <><div>"There is nothing here :("</div><button className="yt__buttontagback" onClick={()=>{setthisArray(mymusicDuplicate); 
                arrayTag=[];
                arrayTagFilterNew=[];
                buttonTag.forEach((el:any) => {
                    el.classList.remove('activetag');
                });
                allButton.classList.add('activetag');
                }}>Back</button></>: ""}</div>
        </div>
        </>
    );
}

export default SoundsEffects;
