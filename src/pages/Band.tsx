import { useEffect, useState } from "react";
const Band = ({ value }: { value: number }) => {
    let [newAmb, setNewAmb] = useState<any[]>([
        {
            iframe: "https://bandcamp.com/EmbeddedPlayer/album=2608927152/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            href: "https://soundarchitecture.bandcamp.com/album/windy-marina-ambience",
            title: "windy marina ambience",
        },
        {
            iframe: "https://bandcamp.com/EmbeddedPlayer/album=1887217169/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            href: "https://soundarchitecture.bandcamp.com/album/countryside-ambience",
            title: "countryside ambience",
        },
        {
            iframe: "https://bandcamp.com/EmbeddedPlayer/album=714654310/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/",
            href: "https://soundarchitecture.bandcamp.com/album/air-conditioner",
            title: "air conditioner",
        },
    ]);
    useEffect(() => {
        // API AMB
        const apisounds: string = "https://apiforsa.herokuapp.com/read/onlySE";
        fetch(apisounds)
            .then((response) => response.json())
            .then((data) => {
                setNewAmb(data.reverse());
            });
    }, []);
    return (
        <>
            <iframe
                style={{ border: "0" }}
                loading="lazy"
                src={newAmb[value].iframe}
                seamless
                title={newAmb[value].iframe}
            >
                <a href={newAmb[value].href}> {newAmb[value].title}</a>
            </iframe>
        </>
    );
};
export default Band;
