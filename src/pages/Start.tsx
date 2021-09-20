import {useEffect} from 'react';
import mylogo from '../img/logosawhite.webp';
import back1 from '../img/background.jpg';
import arleft from '../img/leftar.webp';
import arright from '../img/rightar.webp';
import arrow from '../img/arrow.png';
import { Swiper, SwiperSlide } from '../../node_modules/swiper/react';
// Import Swiper styles

import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation]);
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
                 <h1>What me make</h1>
                 <div className="Start__sectionall">
                     <div className="Start__sectiontitle padding" style={{backgroundImage: `url(${back1})`}}>
                         Sounds Liblary<img className="Start__imgarrow" src={arrow}/>
                     </div>
                     <div className="Start__sectionup">
                         <div className="Start__sectiondescribe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                         <br/>
                         <iframe className="iframe" style={{width:"1120", height:"720"}} src="https://www.youtube.com/embed/y8EvClrhZVc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                         </div>
                     </div>
                 </div>
                 <div className="Start__sectionall">
                     <div className="Start__sectiontitle padding" style={{backgroundImage: `url(${back1})`}}>
                         Designed Ambience <img className="Start__imgarrow" src={arrow}/>
                     </div>
                     <div className="Start__sectionup">
                     <div className="Start__sectiondescribe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
                    <div className="swiper"> <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
  "clickable": true
}} navigation={true} 
observer={true}
 noSwiping={false}
allowTouchMove= {true}
observeParents= {true}
className="mySwiper">
  <SwiperSlide>
  <iframe style={{ border: "0", width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless><a href="https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/">one</a></iframe>
  </SwiperSlide>
  <SwiperSlide>
  <iframe style={{ border: "0", width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless><a href="https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/">one</a></iframe>
  </SwiperSlide>
  <SwiperSlide>
  <iframe style={{ border: "0", width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless><a href="https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/">one</a></iframe>
  </SwiperSlide>
  <SwiperSlide>
  <iframe style={{ border: "0", width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless><a href="https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/">one</a></iframe>
  </SwiperSlide>
  </Swiper></div>
                         </div> </div>
                 </div>
                 <div className="Start__sectionall">
                     <div className="Start__sectiontitle padding" style={{backgroundImage: `url(${back1})`}}>
                         Music<img className="Start__imgarrow" src={arrow}/>
                     </div>
                     <div className="Start__sectionup">
                     <div className="Start__sectiondescribe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem provident iure. Tenetur architecto tempora voluptatibus libero nesciunt repudiandae quo dicta ratione nihil nostrum! Ea officiis quia deleniti esse consectetur.
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
