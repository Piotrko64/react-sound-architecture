import {useEffect, useState} from 'react';
const Band =({value}:{value:number})=>{
    
    let [type] = useState();
    let [newAmb, setNewAmb] = useState<any[]>([
        {
iframe:"https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience"
        },
        {
            iframe:"https://bandcamp.com/EmbeddedPlayer/album=1887217169/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            href: "https://soundarchitecture.bandcamp.com/album/countryside-ambience"
        },
        {
            iframe:"https://bandcamp.com/EmbeddedPlayer/album=714654310/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            href:"https://soundarchitecture.bandcamp.com/album/air-conditioner"
        }
    ]);
    useEffect(()=>{
        const apisounds:string = 'https://apiforsa.herokuapp.com/read/onlySE';
                
            
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
     <iframe style={{ border: "0"}} loading="lazy" src={newAmb[value].iframe}seamless><a href={newAmb[value].href}> {newAmb[value].title}</a></iframe>                    
    </>
    )
}
export default Band;