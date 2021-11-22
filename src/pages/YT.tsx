import {useEffect, useState} from 'react';
const YT =({value}:{value:number})=>{
    
    let [type] = useState();
    let [newAmb, setNewAmb] = useState<any[]>([
        {
iframe:"https://www.youtube.com/embed/y8EvClrhZVc"
        },
        {
            iframe:"https://www.youtube.com/embed/E5LclqEUKO0"
        }
    ]);
    useEffect(()=>{
        const apisounds:string = 'https://apiforsa.herokuapp.com/read/onlyAMB';
                
            
        fetch(apisounds)
            .then(response => response.json())
            .then(data => {
                setNewAmb(data.reverse())
                console.log(data);
                console.log(newAmb[0].iframe.toString())
            });
    },[type]);
    return(
    <>
     <iframe className="iframe"  loading="lazy" src={newAmb[value].iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            
    </>
    )
}
export default YT;