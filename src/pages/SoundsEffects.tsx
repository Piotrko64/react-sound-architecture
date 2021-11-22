import React, { useEffect, useState } from 'react';
import Baner from '../components/baner';
import '../styles/Sounds.scss';
import '../styles/loading.scss';
import arrow from '../img/arrow.png'
import soundback from '../img/piano.webp'
  let arrayTag:Array<any>= [];
  let arrayTagFilter:Array<any>= [];
  let arrayTagFilterNew:Array<any>= [];
  let deleteTag:number;
  let i:number = 0;



const SoundsEffects = () => {
    let [sounds, setsounds] = useState<any[]>([]);
    let [thisArray, setthisArray] = useState<any[]>([]);
    let [mytags, setmytags] = useState<any[]>([]);
    let [type] = useState('type');

            
                            let buttonTag:any;
                            let grid:HTMLElement;
                            let arrowshow:any;
                            
            let counterTags:any=[];
           let counterForTag:number=0;
           let thisForEachTag:any;
           let thisForEachMusic:any;
           let [goodArrayTag, setgoodArrayTag] = useState([]);

           function counterAll(){
            mytags.forEach((tag:number=0)=>(
                counterForTag=0,
                thisForEachTag=tag,
                
                   
                   thisArray.forEach((mus:any)=>(
                    thisForEachMusic=mus,
                    // console.log(thisForEachMusic),
                    // console.log("e"+thisForEachMusic.tag),
                    // console.log(thisForEachTag.title),
                    // console.log(thisForEachMusic.tag.indexOf(thisForEachTag.title)),
                    
                    thisForEachMusic.tag.indexOf(thisForEachTag)!==-1 ? counterForTag++ : false
                    ,console.log(counterForTag)
    
                       
                   )),
                   counterTags.push(counterForTag),
                   console.log(counterTags)
                   
               ))
               
               
               setgoodArrayTag(counterTags);
           };
           
           
                             useEffect(() => {
                                buttonTag= document.querySelectorAll('.Sound__buttontag');
                               
                                grid= document.querySelector('.Sounds__tags')!;
                                arrowshow = document.querySelector('.showtag__img')!;
                 });



                 useEffect(() => {
                    const apisounds:string = 'https://apiforsa.herokuapp.com/read/onlySE';
                
            
                    fetch(apisounds)
                        .then(response => response.json())
                        .then(data => {
                            
                                setthisArray(data.reverse());
                                setsounds(data);
                             
                            
                        }
                        );
            
                        const apiambiencetags:string = 'https://apiforsa.herokuapp.com/read/tagsSE';
                
            
                    fetch(apiambiencetags)
                        .then(response => response.json())
                        .then(data => {
                            
                                setmytags(data);
                                
                               counterAll();
                            
                        }
                        );
                        counterAll();
                },[]);
                useEffect(()=>{

    


                    counterAll();
                
                },[thisArray, sounds, mytags])

                
    return (

        <>
        
            <Baner title="Sounds Effects" image={soundback}/>
            <div className="showtag" onClick={()=>{
            
            
            if(grid.style.display!=="block"){
            grid.style.display="block";
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
                        mytags.map((tag:any, index:any)=>(
                            <>
                            
                            <button style={{display: goodArrayTag[index]===0?  "none" : ""}} className="Sound__buttontag" key={index} onClick={ () => {
                            buttonTag[index].classList.toggle('activetag');
                            
                            if(arrayTag.indexOf(tag)===-1){
                                arrayTag.push(tag);
                                
                            }
                            else{
                                deleteTag = arrayTag.indexOf(tag);
                                
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
                            )}}>{tag}<span>({goodArrayTag[index]})</span></button>
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
