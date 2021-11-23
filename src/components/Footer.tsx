import React, {useState} from 'react';
import '../styles/footer.scss'
import mylogo from '../img/logosawhite.webp';
import bigyt from '../img/yt.webp';
import bigband from '../img/band.webp';
import ReactTooltip from 'react-tooltip';


const Footer = () => {
    const [iscopy, setiscopy] = useState('Click to copy');
    
    const copyText=()=>{
        const timeCopy=()=>{
            setiscopy('Click to copy')
        }
        
        navigator.clipboard.writeText('soundarchitecture@outlook.com');
        setiscopy('Email has been copied!')
        
        setTimeout(timeCopy, 3000)
    }
    return (
        <footer className="footer">
           <div className="grid__up1">
           <a href="https://www.youtube.com/channel/UCseRS2xV0cIl4Mm44b4rqvw" target="_blank"><img src={bigyt} alt="youtube Sound Architecture"/></a>
           </div>
           <div className="grid__up2">
               <div className="grid__underline">Politics private</div> 
               
               <div className="grid__underline">License Agreement</div>
               
                <div className="footer__email" data-tip={iscopy}>
                 <div className="grid__underline copyText" onClick={()=>{
                     
                     copyText()
                    }}>Email</div> 
                </div>
                
                <ReactTooltip className="tooltip" getContent={()=>`${iscopy}`}/>

               
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
