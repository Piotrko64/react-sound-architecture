import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import mylogo from "../img/logosawhite.webp";
import ytlogo from "../img/ytsmall.webp";
import bandlogo from "../img/bandsmall.webp";

const Nav = () => {
    const ul = useRef<HTMLUListElement>(null);
    const alli = useRef<Array<any>>([])!;
    const btn = useRef<HTMLDivElement>(null)!;
    const btnline = useRef<Array<any>>([])!;
    // Underline for NAV
    const [hover, sethover] = useState<boolean>(false);
    const [where, setwhere] = useState<Object>({ top: "0px", left: "0px", width: "0px" });

    useEffect(() => {
        alli.current.forEach((li) => {
            li.addEventListener("mouseenter", () => {
                let topli =
                    li.getBoundingClientRect().top +
                    li.getBoundingClientRect().height +
                    window.scrollY +
                    "px";
                document.addEventListener("scroll", () => {
                    topli =
                        li.getBoundingClientRect().top +
                        li.getBoundingClientRect().height +
                        window.scrollY +
                        "px";
                });
                const leftli = li.getBoundingClientRect().left + "px";
                const widthli = li.getBoundingClientRect().width + "px";

                setwhere({ top: topli, left: leftli, width: widthli });
            });

            li.addEventListener("click", () => {
                window.scroll(0, 0);
            });
        });

        // function
        const toggleBTN = () => {
            ul.current!.classList.toggle("active");
            btnline.current!.forEach((line) => {
                line.classList.toggle("active");
            });
        };
        btn.current!.addEventListener("click", toggleBTN);
        alli.current.forEach((al) =>
            al.addEventListener("click", () => {
                ul.current!.classList.toggle("active");
                btnline.current!.forEach((line) => {
                    line.classList.toggle("active");
                });
            })
        );
    }, []);
    return (
        <>
            <nav className="nav padding">
                <div style={where} className={`${hover ? "hoverli on" : "hoverli"}`} id="underline"></div>
                <div className="nav__btn" ref={btn}>
                    <div className="nav__line nav__line--first" ref={(el) => (btnline.current[0] = el)}></div>
                    <div
                        className="nav__line nav__line--second"
                        ref={(el) => (btnline.current[1] = el)}
                    ></div>
                    <div className="nav__line nav__line--third" ref={(el) => (btnline.current[2] = el)}></div>
                </div>
                <ul
                    className="nav__ul"
                    ref={ul}
                    onMouseOver={() => {
                        sethover(true);
                    }}
                    onMouseOut={() => {
                        sethover(false);
                    }}
                >
                    <li ref={(el) => (alli.current[0] = el)}>
                        <a style={{ color: "gray" }}>Music</a>
                    </li>
                    <li ref={(el) => (alli.current[1] = el)}>
                        <NavLink to="/SoundEffects">Sound Effects</NavLink>
                    </li>
                    <li ref={(el) => (alli.current[2] = el)}>
                        <NavLink to="/Ambience">Ambience</NavLink>
                    </li>

                    <div className="nav__hiperplus">
                        <a
                            href="https://www.youtube.com/channel/UCseRS2xV0cIl4Mm44b4rqvw"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={ytlogo} alt="YouTube" />
                        </a>
                        <br></br>
                        <a
                            href="https://soundarchitecture.bandcamp.com/releases"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={bandlogo} alt="bandcamp Sound Architecture" />
                        </a>
                    </div>
                </ul>
                <div className="nav__logo">
                    {" "}
                    <NavLink to="/">
                        <img
                            src={mylogo}
                            alt="logo Sound Architecture"
                            className="nav__logoimg"
                            onClick={() => {
                                window.scroll({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                        />
                    </NavLink>{" "}
                </div>

                <div className="nav__hiperlinks">
                    <a
                        href="https://www.youtube.com/channel/UCseRS2xV0cIl4Mm44b4rqvw"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={ytlogo} alt="youtube SA" />
                    </a>
                    <a
                        href="https://soundarchitecture.bandcamp.com/releases"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={bandlogo} alt="bandcamp SA" />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Nav;
