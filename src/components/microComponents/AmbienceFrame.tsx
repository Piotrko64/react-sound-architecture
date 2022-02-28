import { forAmbience } from "../../typing/datatype";
import Loading from "../Loading";

const AmbienceFrame = (props: {
    music: forAmbience;
    showGrid: () => void;
    forforSA: () => void;
    arrayTag: (e: any) => void;
    mytags: string[];
    buttonTag: any;
}) => {
    const { music, showGrid, forforSA, arrayTag, mytags, buttonTag } = props;
    return (
        <div className="yt__container">
            <div className="yt__iframe">
                <Loading />

                <iframe
                    loading="lazy"
                    src={music.iframe}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="yt__describe">
                <h4>{music.title}</h4>
                <div className="yt__describesmall">{music.describe}</div>
                {/* Tags under iframe */}
                <div className="yt__tag">
                    {music.tag.map((tags: any) => (
                        <div
                            className="tag"
                            onClick={() => {
                                showGrid();
                                arrayTag(tags);
                                forforSA();

                                mytags.forEach((arr: string, index: number) => {
                                    buttonTag.forEach((el: HTMLElement) => {
                                        el.classList.remove("activetag");
                                    });
                                    setTimeout(() => {
                                        if (arr === tags) {
                                            buttonTag[index].classList.add("activetag");
                                        }
                                    }, 50);
                                });

                                window.scrollTo(0, 0);
                            }}
                        >
                            #{tags}{" "}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default AmbienceFrame;
