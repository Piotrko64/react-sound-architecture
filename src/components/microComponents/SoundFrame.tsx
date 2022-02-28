import { forSounds } from "../../typing/datatype";
import Loading from "../Loading";

const SoundFrame = (props: { sound: forSounds }) => {
    return (
        <div className="Sounds__one" key={props.sound.Id}>
            <Loading />
            <iframe
                title={props.sound.iframe}
                style={{ border: "0" }}
                loading="lazy"
                src={props.sound.iframe}
                seamless
            >
                <a href={props.sound.href}>{props.sound.title} </a>
            </iframe>
        </div>
    );
};
export default SoundFrame;
