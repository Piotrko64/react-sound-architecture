import {useEffect} from 'react';
import Swiper_Designed from '../components/Swiper_Designed';
import mylogo from '../img/logosawhite.webp';
import back1 from '../img/background.jpg';
import arleft from '../img/leftar.webp';
import arright from '../img/rightar.webp';
import arrow from '../img/arrow.png';

import musicback from '../img/notesstart.jpg';
import soundback from '../img/pianostart.jpg';
import ambienceback from '../img/ambiencestart.jpg'



const Start = () => {
    useEffect(() => {
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
            <div className="Start__background padding" style={{backgroundImage:  `url(${back1})` }}> 
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
                         Sounds Library<img className="Start__imgarrow" src={arrow}/>
                     </div>
                     <div className="Start__sectionup">
                         <div className="Start__sectiondescribe">
                             <div className="describe">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                            
                             </div>
                         <br/>
                         </div>
                     </div>
                 </div>
                 <div className="Start__sectionall">
                     <div className="Start__sectiontitle padding" style={{backgroundImage: `url(${ambienceback})`}}>
                         Designed Ambience <img className="Start__imgarrow" src={arrow}/>
                     </div>
                     <div className="Start__sectionup">
                     <div className="Start__sectiondescribe">
                     <div className="describe">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                            
                             </div>
                             <div className="iframes">
                             <iframe className="iframe" style={{width:"700", height:"394"}} src="https://www.youtube.com/embed/y8EvClrhZVc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                             <iframe className="iframe" style={{width:"700", height:"394"}} src="https://www.youtube.com/embed/y8EvClrhZVc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                             </div>
                    </div> </div>
                 </div>
                 <div className="Start__sectionall">
                     <div className="Start__sectiontitle padding" style={{backgroundImage: `url(${musicback})`}}>
                         Music<img className="Start__imgarrow" src={arrow}/>
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
                 <img src={arleft}/>
                 <div className="Prefooter__text">
                     Check on Bandcamp and Youtube</div>
                 <img src={arright}/>
            </div>
        </div>
    );
}

export default Start;
