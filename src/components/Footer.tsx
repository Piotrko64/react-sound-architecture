import React from 'react';
import '../styles/footer.scss'
import mylogo from '../img/logosawhite.webp';
import bigyt from '../img/yt.webp';
import bigband from '../img/band.webp';
const Footer = () => {
    return (
        <footer className="footer">
           <div className="grid__up1">
           <a href="https://www.youtube.com/channel/UCseRS2xV0cIl4Mm44b4rqvw" target="_blank"><img src={bigyt} alt="youtube Sound Architecture"/></a>
           </div>
           <div className="grid__up2">
               License Agreement
               <br/>
               E-mail Contact
           </div>
           <div className="grid__up3">
           <a href="https://soundarchitecture.bandcamp.com/releases" target="_blank"><img src={bigband} alt="Bandcamp"/></a>
           </div>
           
           <div className="grid__down">
              Sound Architecture &copy; 2021 All rights reserved
              <br/>
              <img src={mylogo}  className="footer__img" alt="SoundArchitecture__logo"/>
            </div>
        </footer>
    );
}

export default Footer;
