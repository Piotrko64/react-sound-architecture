import { useState } from "react";
import { NavLink } from "react-router-dom";
import mylogo from "../img/logosawhite.webp";
import ytlogo from "../img/ytsmall.webp";
import bandlogo from "../img/bandsmall.webp";

const Nav = () => {
    const [nav, setNav] = useState<boolean>(true);
    function handleToggle() {
        setNav(!nav);
    }
    function windowUp() {
        window.scroll(0, 0);
        setNav(true);
    }
    return (
        <>
            <div className="nav__paddingtop"></div>
            <nav className={nav ? "nav padding" : "nav padding active"}>
                <div className="nav__btn" onClick={() => handleToggle()}>
                    <div className="nav__line nav__line--first"></div>
                    <div className="nav__line nav__line--second"></div>
                    <div className="nav__line nav__line--third"></div>
                </div>
                <ul className={nav ? "nav__ul" : "nav__ul active"}>
                    <li>
                        <a style={{ color: "gray" }} href="./">
                            Music
                        </a>
                    </li>
                    <li onClick={windowUp}>
                        <NavLink to="/SoundEffects">Sound Effects</NavLink>
                    </li>
                    <li onClick={windowUp}>
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
