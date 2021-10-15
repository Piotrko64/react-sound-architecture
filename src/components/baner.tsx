import React from 'react';
import '../styles/baner.scss';

import imgmusic from '../img/background.jpg';

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


