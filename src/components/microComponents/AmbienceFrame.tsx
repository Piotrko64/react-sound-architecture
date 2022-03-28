import { dataMusic } from "../../types/dataMusic.interface";
import Loading from "./Loading";

const AmbienceFrame = (props: {
    music: dataMusic;
    showGrid: () => void;
    forforSA: () => void;
    arrayTag: (e: string) => void;
    myTags: string[];
    buttonTag: HTMLButtonElement[];
}) => {
    const { music, showGrid, forforSA, arrayTag, myTags, buttonTag } = props;
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
                    {music.tag.map((tags: string) => (
                        <div
                            key={tags}
                            className="tag"
                            onClick={() => {
                                showGrid();
                                arrayTag(tags);
                                forforSA();

                                myTags.forEach((arr: string, index: number) => {
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
