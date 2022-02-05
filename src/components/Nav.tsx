import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../styles/Nav.scss";
import mylogo from "../img/logosawhite.webp";
import ytlogo from "../img/ytsmall.webp";
import bandlogo from "../img/bandsmall.webp";

const Nav = () => {
    useEffect(() => {
        // important
        // white line under li
        const newHover = document.createElement("div")!;
        newHover.classList.add("hoverli");
        document.body.appendChild(newHover);
        // const
        const ul = document.querySelector("ul")!;
        const allli = document.querySelectorAll("li");

        const btn = document.querySelector(".nav__btn")!;
        const btnline = document.querySelectorAll(".nav__line")!;
        //  newHoer on and off
        ul.addEventListener("mouseover", () => {
            newHover.classList.add("on");
        });
        ul.addEventListener("mouseout", () => {
            newHover.classList.remove("on");
        });

        allli.forEach((li) => {
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
                    newHover.style.top = topli;
                });
                const leftli = li.getBoundingClientRect().left + "px";
                const widthli = li.getBoundingClientRect().width + "px";

                newHover.style.top = topli;
                newHover.style.left = leftli;
                newHover.style.width = widthli;
            });

            li.addEventListener("click", () => {
                window.scroll(0, 0);
            });
        });

        // function
        const toggleBTN = () => {
            ul.classList.toggle("active");
            btnline.forEach((line) => {
                line.classList.toggle("active");
            });
        };
        btn.addEventListener("click", toggleBTN);
        allli.forEach((al) =>
            al.addEventListener("click", () => {
                ul.classList.toggle("active");
                btnline.forEach((line) => {
                    line.classList.toggle("active");
                });
            })
        );
    }, []);
    return (
        <>
            <div className="nav__paddingtop"></div>
            <nav className="nav padding">
                <div className="nav__btn">
                    <div className="nav__line nav__line--first"></div>
                    <div className="nav__line nav__line--second"></div>
                    <div className="nav__line nav__line--third"></div>
                </div>
                <ul className="nav__ul">
                    <li>
                        <a style={{ color: "gray" }}>Music</a>
                    </li>
                    <li>
                        <NavLink to="/SoundEffects">Sound Effects</NavLink>
                    </li>
                    <li>
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
                            <img
                                src={bandlogo}
                                alt="bandcamp Sound Architecture"
                            />
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
