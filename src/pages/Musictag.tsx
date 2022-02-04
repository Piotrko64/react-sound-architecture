import "../styles/ambience.scss";
import Baner from "../components/baner";
import { useParams, useHistory } from "react-router-dom";

const Music = () => {
    let paramtag: { tag: string } = useParams();
    let history = useHistory();
    let thisparam = paramtag.tag;
    let titleparam = "Music #" + thisparam;
    const mymusic = [
        {
            Id: 1,
            iframe: "https://www.youtube.com/embed/Zh3JGIMWdnE",
            title: "White Noise, Waterfall, Nature Sounds, Sleep Sound",
            describe:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti aliquam modi nesciunt repudiandae?",
            data: "2021-06-09",
            tag: ["windy"],
        },
        {
            Id: 2,
            iframe: "https://www.youtube.com/embed/9Z9xrHg5Szw",
            title: "Small Town Rain, Street Rain",
            describe:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti",
            data: "2021-06-09",
            tag: ["rain"],
        },
        {
            Id: 3,
            iframe: "https://www.youtube.com/embed/E5LclqEUKO0",
            title: "Cicadas, Light wind, Water waves, Nature sounds",
            describe:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta ab maiores ut earum explicabo fugit beatae omnis et id, quam perspiciatis delectus dolore hic corrupti lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque veniam quisquam pariatur aspernatur cupiditate sequi nihil libero obcaecati perferendis, quos, corporis aliquam officiis quae aliquid. Esse aut quod est.",
            data: "2021-06-09",
            tag: ["windy", "water"],
        },
    ];

    const mytags = [
        {
            id: 1,
            title: "windy",
        },
        {
            id: 2,
            title: "rain",
        },
        {
            id: 3,
            title: "water",
        },

        {
            id: 4,
            title: "town",
        },
        {
            id: 5,
            title: "harbours",
        },
        {
            id: 6,
            title: "birds",
        },
    ];
    const mymusicfilter = [...mymusic];
    console.log(mymusicfilter[1].tag.indexOf(thisparam));
    const filter = mymusicfilter.filter(
        (music) => music.tag.indexOf(thisparam) >= 0
    );
    console.log(filter);

    return (
        <>
            <>
                <Baner title={titleparam} />

                <div className="yt">
                    {/* <div className="yt__describe describealign ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laboriosam ex nisi qui doloribus! Dolorum est et unde magni eaque quis quaerat impedit quas maiores voluptate, similique recusandae dolore? Atque.
            </div> */}
                    <div className="yt__tags">
                        <button
                            className="yt__buttontag"
                            onClick={() => {
                                history.push(`../Music`);
                                window.scrollTo({
                                    top: 150,
                                    behavior: "smooth",
                                });
                            }}
                        >
                            {" "}
                            All
                        </button>
                        {mytags.map((tag) => (
                            <>
                                <button
                                    className={
                                        tag.title === thisparam
                                            ? "yt__buttontag active"
                                            : "yt__buttontag"
                                    }
                                    key={tag.id}
                                    onClick={() => {
                                        history.push(`${tag.title}`);
                                        window.scrollTo({
                                            top: 150,
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    {" "}
                                    {tag.title}{" "}
                                </button>
                            </>
                        ))}
                    </div>

                    {filter.map((music) => (
                        <>
                            <div
                                className="yt__container padding"
                                key={music.Id}
                            >
                                <div className="yt__iframe">
                                    <iframe
                                        width="700"
                                        height="393.75"
                                        src={music.iframe}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="yt__describe">
                                    <div className="yt__describe">
                                        {music.describe}
                                    </div>
                                    <span className="yt__tag">
                                        {music.tag.map((tags) => (
                                            <div
                                                className="tag"
                                                onClick={() => {
                                                    history.push(`${tags}`);
                                                    window.scrollTo({
                                                        top: 150,
                                                        behavior: "smooth",
                                                    });
                                                }}
                                            >
                                                #{tags}{" "}
                                            </div>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </>
                    ))}
                    {filter.length === 0 ? `Brak wyników dla ${thisparam}` : ""}
                </div>
            </>
        </>
    );
};

export default Music;
