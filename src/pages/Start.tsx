import {useEffect, lazy, Suspense} from 'react';

import mylogo from '../img/logosawhite.webp';

import arleft from '../img/leftar.webp';
import arright from '../img/rightar.webp';
import arrow from '../img/arrow.png';

import musicback from '../img/notesstart.webp';
import soundback from '../img/pianostart.webp';
import ambienceback from '../img/ambiencestart.webp'



const YT = lazy(() => import("./YT"));
const Start = () => {
    
    
    useEffect(() => {
        // Fetch for 2 the most new iframe ambience
       
                        
        const up = document.querySelectorAll('.Start__sectiontitle');
        const arrow = document.querySelectorAll('.Start__imgarrow')!;
        const down = document.querySelectorAll('.Start__sectionup') as unknown as HTMLCollectionOf<HTMLElement>;
        up.forEach((oneup,index)=>{
            oneup.addEventListener('click',()=>{
                let maxHeight =down[index].scrollHeight;
                if(down[index].style.display!=="block"){
                    down[index].style.display="block";
                    maxHeight=down[index].scrollHeight;
                    down[index].style.opacity="1";
                    down[index].style.maxHeight=maxHeight+"px";
                    console.log(arrow[index]);
                    arrow[index].classList.add('arrowdown');
                }
else{
    
    down[index].style.opacity="0";
    down[index].style.maxHeight="0";
    arrow[index].classList.remove('arrowdown');
    setTimeout(()=>{
        down[index].style.display="none";
    },300)
}
            })
        })
        
    }, []);
    return (
        <div className="Start ">
            <div className="Start__background padding"> 
            <div className="Start__signature"> 
            <div className="Start__logo"> <img src={mylogo} alt="logo__SA" className="Start__logoimg"/> </div>
            <div className="Start__column">
            <div className="Start__signature--up">Sound Architecture</div>
            <div className="Start__signature--down">Website for your sounds, ambience and music</div>
             </div></div></div>
             <div className="Start__content" >
                 <div className="Start__h1">What me make</div>
                 <div className="Start__sectionall">
                     <div className="Start__sectiontitle padding" style={{backgroundImage: `url(${soundback})`}}>
                     <div className="Start__onlytitle">Sounds Library<img className="Start__imgarrow" alt="arrow Sounds" src={arrow}/>
                     </div>
                     </div>
                     <div className="Start__sectionup">
                         <div className="Start__sectiondescribe">
                             <div className="describe">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                            
                             </div>
                         
                         </div>
                     </div>
                 </div>
                 <div className="Start__sectionall">
                        <div className="Start__sectiontitle padding" style={{backgroundImage: `url(${ambienceback})`}}>
                        <div className="Start__onlytitle">
                         Designed Ambience <img className="Start__imgarrow" src={arrow} alt="arrow Sounds Architecture"/>
                        </div>
                        </div>
                     <div className="Start__sectionup">
                     <div className="Start__sectiondescribe">
                     <div className="describe">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                            
                             </div>
                             <div className="iframes">
                             <Suspense fallback={<div>Wczytywanie...</div>}>
                             <YT value={0}/>
                             <YT value={1}/>
                             </Suspense>
                             </div>
                    </div> </div>
                 </div>
                 <div className="Start__sectionall">
                        <div className="Start__sectiontitle padding" style={{backgroundImage: `url(${musicback})`}}>
                        <div className="Start__onlytitle">  
                         Music
                        
                        <img className="Start__imgarrow" src={arrow} alt="Architecture of Sounds"/>
                        </div>
                     </div>
                     <div className="Start__sectionup">
                     <div className="Start__sectiondescribe">
                     <div className="describe">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                            
                             </div>
                     </div> </div>
                 </div>
                 
             </div>
             <div className="Prefooter">
                <div> <img src={arleft} alt="left"/></div>
                 <div className="Prefooter__text">
                     Check on Bandcamp and Youtube</div>
                 <div><img src={arright} alt="right"/></div>
            </div>
        </div>
    );
}

export default Start;
