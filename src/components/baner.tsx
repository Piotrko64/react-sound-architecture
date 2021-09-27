import React from 'react';
import '../styles/baner.scss';
import Music from '../pages/Music';
import imgmusic from '../img/background.jpg';
import '../styles/baner.scss'
const Baner = (props:any) => {

    return (
        <div className="baner" style={{backgroundImage: `url(${props.image})` }}>
            <div className="baner__title ">
            {props.title}
            </div>
        </div>
    );
}

export default Baner;


