import React, {useState, useEffect} from 'react';
import '../styles/ambience.scss'
import Winter from '../img/winter.webp'
import Baner from '../components/baner';
import arrow from '../img/arrow.png'


  let arrayTag:any= [];
  let arrayTagFilter:any= [];
  let arrayTagFilterNew:any= [];
  
  let deleteTag;
  let counter:any = [];
  let i = 0;
  let a = 0;
const Ambience = () => {
    
    
    const mymusic =[{
        Id: 0,
        iframe: "https://www.youtube.com/embed/Zh3JGIMWdnE",
        title: "White Noise, Waterfall, Nature Sounds, Sleep Sound",
        describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti aliquam modi nesciunt repudiandae?",
        data: "2021-06-09",
        tag: ['windy']
        },
        {
            Id: 1,
            iframe: "https://www.youtube.com/embed/9Z9xrHg5Szw",
            title: "Small Town Rain, Street Rain",
            describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
            data: "2021-06-09",
            tag: ['rain']
            },
            {
                Id: 2,
                iframe: "https://www.youtube.com/embed/E5LclqEUKO0",
                title: "Cicadas, Light wind, Water waves, Nature sounds",
                describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque veniam quisquam pariatur aspernatur cupiditate sequi nihil libero obcaecati perferendis, quos, corporis aliquam officiis quae aliquid. Esse aut quod est."
                ,
                data: "2021-06-09",
                tag: ['water','windy']
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
            ]as any;
            
            
            let [thisArray, setthisArray] = useState(mymusic);
            // let [TextShow, setTextShow] = useState(`Tags<img src=${arrow}/>`);

            
           let buttonTag:any;
           let showGrid:any;
           let grid:any;
           let arrowshow:any;
            useEffect(() => {
                buttonTag= document.querySelectorAll('.yt__buttontag')!;
                showGrid= document.querySelector('.showtag')!;
                grid= document.querySelector('.yt__tags')!;
                arrowshow = document.querySelector('.showtag__img');
})
                

    return (
        
        <>
        
        <Baner title="Ambience" image={Winter}/>
        <div className="showtag" onClick={()=>{
            
            console.log(grid.scrollHeight)
            if(grid.style.display!=="grid"){
                // zmiana strzałki
            grid.style.display="grid";
            grid.style.opacity="1";
            grid.style.maxHeight=grid.scrollHeight+"px";
                console.log(grid.scrollHeight);
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
                    
                    
                    {
                        
                        mytags.map((tag:any)=>(
                            <>
                            <button className="yt__buttontag" key={tag.id} onClick={ () => {
                                
                            buttonTag[tag.id].classList.toggle('activetag');
                        //     if(
                        //         allButton.classList[2]==='activetag'
                        //     ){
                        //         allButton.classList.remove('activetag');
                        //         setthisArray([]);
                        //    arrayTagFilterNew=[];

                        //     }
                            
                            // allButton.classList.remove('activetag')
                            if(arrayTag.indexOf(tag.title)===-1){
                                arrayTag.push(tag.title);
                                // allButton.classList.remove('activetag');
                            }
                            else{
                                deleteTag = arrayTag.indexOf(tag.title);
                                console.log(deleteTag);
                                arrayTag.splice(deleteTag,1);
                            }
                            
                            
                            
                           
                            arrayTagFilterNew=mymusic.filter( ar =>{
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
setthisArray(mymusic)
                            }
                           
                            
                            console.log(arrayTagFilterNew);
                            window.scrollTo(
                                {
                                    top: 150,
                                    behavior: 'smooth'
                                    
                                  }
                            )
                        
                        }
                            
                            }> {tag.title} {counter[tag.id]}</button>
                            </>
                        ))
                    }
            </div>
        <div className="yt">
            {/* <div className="yt__describe describealign ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laboriosam ex nisi qui doloribus! Dolorum est et unde magni eaque quis quaerat impedit quas maiores voluptate, similique recusandae dolore? Atque.
            </div> */}
            
            
            
            
            <div className="yt__allcontainer">
            {
                thisArray.map((music: { Id: React.Key | null | undefined; iframe: string | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; describe: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; tag: any[]; })=>( <><div className="yt__container" key={music.Id}>
                    <div className="yt__iframe"><iframe width="700" height="393.75" src={music.iframe} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="yt__describe">
                        <h3>{music.title}</h3>
                <div className="yt__describesmall">{music.describe}</div>
                <span className="yt__tag">{music.tag.map((tags)=>(<div className="tag" onClick={ () => {
                    
                    arrayTag=[tags];
               
                    arrayTagFilterNew=mymusic.filter( ar =>{
                        for( i=0; i<=arrayTag.length ;i++){
                            if(ar.tag.indexOf(arrayTag[i])>=0){
                                return true;
                            }
                        }
                    
                        
                    });
                    
                   arrayTagFilterNew=arrayTagFilterNew.concat(arrayTagFilter);
                    
                    
                    mytags.forEach((arr:any,index:any)=>{
                        buttonTag.forEach((el: any) => {
                            el.classList.remove('activetag');
                        })
                    setTimeout(()=>{
                        if(arr.title===arrayTag[0]){
                            buttonTag[index].classList.add('activetag');
                            console.log(buttonTag[index])
                        }
                    },2)
                    
                    })
                    // buttonTag[].classList.toggle('activetag');
                    
                    setthisArray(arrayTagFilterNew);
                    

                    
                    ;
                    window.scrollTo(0,0)}} >#{tags} </div>))}</span>
                    </div>
                
                    </div></>)
                    )
                    
                }
            <div className="padding">
           {/* {arrayTag.length===0 ? setthisArray(mymusicDuplicate) : false} */}

                {}</div>
            
            </div>
        </div>
        </>
    );
}

export default Ambience;
function activetag(activetag: any) {
    throw new Error('Function not implemented.');
}

