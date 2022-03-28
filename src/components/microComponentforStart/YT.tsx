import { useEffect, useState } from "react";
import { AMB } from "../../data/dataApi/api";
import { dataMusic } from "../../types/dataMusic.interface";
const YT = ({ value }: { value: number }) => {
    let [type] = useState();
    let [newAmb, setNewAmb] = useState<Partial<dataMusic>[]>([
        {
            iframe: "https://www.youtube.com/embed/y8EvClrhZVc",
        },
        {
            iframe: "https://www.youtube.com/embed/E5LclqEUKO0",
        },
    ]);
    useEffect(() => {
        const apisounds: string = AMB;

        fetch(apisounds)
            .then((response) => response.json())
            .then((data) => {
                setNewAmb(data.reverse());
            });
    }, [type]);
    return (
        <>
            <iframe
                className="iframe"
                loading="lazy"
                src={newAmb[value].iframe}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </>
    );
};
export default YT;
