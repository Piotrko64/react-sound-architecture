function Licence(props: { hideLicence: () => void }) {
    return (
        <>
            <div
                className="background"
                onClick={() => {
                    props.hideLicence();
                    console.log("xs");
                }}
            ></div>
            <div className="Licence">
                <div className="Licence__describe">
                    <div className="Licence__text">
                        {/*Licence*/}
                        <h1>LICENSE AGREEMENT</h1>
                        <h2>GRANT OF LICENSE</h2>
                        By purchasing sound, sound effects or sound libraries (albums) on my bandcamp profile
                        site. I (Sound Architecture) grant the Licensee a royalty-free model of license for
                        all purchased goods on the terms and conditions set out in this Agreement. It is a
                        non-exclusive, worldwide license.
                        <br />
                        <br />
                        <strong>
                            The sounds are owned by the Licensor and all intellectual property rights are hold
                            by the Licensor. The ownership and other rights than the license rights granted in
                            this Agreement remain the sole property of the Licensor. The Licensee must not
                            claim ownership or authorship to the ORIGINAL sounds, only user rights.{" "}
                        </strong>
                        <br />
                        <h2>RIGHTS:</h2>
                        The license granted in this Agreement allows the Licensee: - Use the licensed sound
                        effects on an unlimited number of projects for the entirety of their lifetime for
                        personal and commercial projects without attribution, - Redesign the licensed sounds
                        and sell them without attribution or royalties, ONLY if they were heavily modified, -
                        Distribute and publicly perform reproductions of the sounds, where these are
                        incorporated in and synchronized with other media productions, which shall mean
                        products that contain at least one additional media element (music, voice, image,
                        etc.).
                        <br />
                        <br />
                        <strong>
                            The Sounds may not be used by other legal entities than the one entering into this
                            Agreement unless these entities accept and shall be bound by this Agreement.
                        </strong>
                        <br />
                        <br />
                        <strong>
                            The Licensee has no right to transfer, license, sublicense, sell or otherwise
                            assign the sounds
                        </strong>
                        <br />
                        <h3>Restrictions:</h3>
                        The Licensee is not permitted to:
                        <ul>
                            <li>
                                {" "}
                                Distribute or perform reproductions of the sounds where these are not
                                incorporated in and synchronized with other media productions,{" "}
                            </li>
                            <li>
                                {" "}
                                Sell any of the licensed sound effects in its original form for commercial
                                gain and claim ownership, - Use ORIGINAL sounds to: create sound libraries,
                                virtual instruments; make „ambience” type of videos, playlists and upload to
                                YouTube, Spotify or any similar media platform unless it is composed of a
                                greater number of various tracks,{" "}
                            </li>
                            <li>
                                {" "}
                                Upload any of the licensed sound effects in its original form to any media
                                platform to claim ownership or commercial gain (Except for the above case),{" "}
                            </li>
                            <li>
                                {" "}
                                Use the sounds in any way that violate the law. The Licensor warrants that the
                                Licensor owns the sounds and has the right to license the sounds to the
                                Licensee.
                            </li>
                        </ul>
                        <br />
                        <strong>
                            The Licensor shall not be liable for any indirect loss or damages, including loss
                            of business or business profits, business interruption resulting from use of the
                            sounds.
                        </strong>
                        <h2>CONTACT:</h2>
                        For any questions or business contact please message me by bandcamp or this e-mail:
                        soundarchitecture@outlook.com
                        <br />
                        <br />
                        <div
                            className="Licence__close"
                            onClick={() => {
                                props.hideLicence();
                            }}
                        >
                            Close
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Licence;
