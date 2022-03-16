import arleft from "../img/leftar.webp";
import arright from "../img/rightar.webp";
import { Helmet } from "react-helmet";
import { startDatabase } from "../data/dataSection/startSection";
import Section from "../components/microComponentforStart/Section";

const Start = () => {
    return (
        <>
            <Helmet>
                <title>Sound Architecture</title>
                <meta name="description" content="Welcome I share here my own sound libraries which you can check out on bandcamp: https://soundarchitecture.bandcamp.com
I would like to upload more complex ambiance videos in the future which would consist of greater number of different tracks and sound effects to design true ambience." />
            </Helmet>
            <div className="Start ">
                <div className="Start__background padding">
                    <div className="Start__signature">
                        {/* <div className="Start__logo"> <img src={mylogo} alt="logo__SA" className="Start__logoimg"/> </div> */}
                        <div className="Start__column">
                            <div className="Start__signature--up">Sound Architecture</div>
                            {/* <div className="Start__signature--down">Website for your sounds, ambience and music</div> */}
                        </div>
                    </div>
                </div>
                <div className="Start__content">
                    {startDatabase.map((e) => (
                        <Section value={e} key={e.url} />
                    ))}
                </div>
                <div className="Prefooter">
                    <div>
                        {" "}
                        <img src={arleft} alt="left" />
                    </div>
                    <div className="Prefooter__text">Check on Bandcamp and Youtube</div>
                    <div>
                        <img src={arright} alt="right" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Start;
