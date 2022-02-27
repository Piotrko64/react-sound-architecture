import { Suspense, lazy, useRef } from "react";
import arrow from "../../img/arrow.png";
import { startData } from "../../typing/datatype";

const Band = lazy(() => import("../../components/microComponentforStart/Band"));
const YT = lazy(() => import("../../components/microComponentforStart/YT"));

const Section = ({ value }: { value: startData }) => {
    const { type, title, describe, url } = value;
    const sectionUp = useRef<HTMLDivElement>(null);

    const arrowImg = useRef<HTMLImageElement>(null);
    const titleSection = useRef<HTMLDivElement>(null);

    function expandDown() {
        let maxHeight = sectionUp.current!.scrollHeight;
        if (sectionUp.current!.style.display !== "block") {
            sectionUp.current!.style.display = "block";
            maxHeight = sectionUp.current!.scrollHeight;
            sectionUp.current!.style.opacity = "1";
            sectionUp.current!.style.maxHeight = maxHeight + "px";
            arrowImg.current!.classList.add("arrowdown");
        } else {
            sectionUp.current!.style.opacity = "0";
            sectionUp.current!.style.maxHeight = "0";
            arrowImg.current!.classList.remove("arrowdown");
            setTimeout(() => {
                sectionUp.current!.style.display = "none";
            }, 300);
        }
    }
    return (
        <div className="Start__sectionall">
            <div
                className="Start__sectiontitle padding"
                style={{ backgroundImage: `url(${url})` }}
                ref={titleSection}
                onClick={() => {
                    expandDown();
                }}
            >
                <div className="Start__onlytitle">
                    {title}
                    <img className="Start__imgarrow" alt="arrow Sounds" src={arrow} ref={arrowImg} />
                </div>
            </div>
            <div className="Start__sectionup" ref={sectionUp}>
                <div className="Start__sectiondescribe">
                    <div className="describe">
                        {describe} <br /> <br />
                        {type !== "Soon" ? (
                            <b>Recent releases:</b>
                        ) : (
                            <div style={{ textAlign: "center" }}>Soon</div>
                        )}
                    </div>
                    {type === "SL" ? (
                        <div className="iframes--bandcamp">
                            <Suspense fallback={<div>Loading...</div>}>
                                <Band value={0} />
                                <Band value={1} />
                                <Band value={2} />
                            </Suspense>
                        </div>
                    ) : (
                        ""
                    )}
                    {type === "AMB" ? (
                        <div className="iframes--yt">
                            <Suspense fallback={<div>Loading...</div>}>
                                <YT value={0} />
                                <YT value={1} />
                            </Suspense>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default Section;
