import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/react';


const Swiper_Designed = () => {
    return (
        <div className="swiper">
            <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="swiper__diviframe">
        <iframe width="700" height="393.75" src="https://www.youtube.com/embed/Zh3JGIMWdnE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__diviframe">
        <iframe width="700" height="393.75" src="https://www.youtube.com/embed/Zh3JGIMWdnE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__diviframe">
        <iframe width="700" height="393.75" src="https://www.youtube.com/embed/Zh3JGIMWdnE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      
        </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="swiper__diviframe">
          <iframe width="700" height="393.75" src="https://www.youtube.com/embed/Zh3JGIMWdnE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      
          </div>
      </SwiperSlide>
      
    </Swiper>
        </div>
    );
}

export default Swiper_Designed;
