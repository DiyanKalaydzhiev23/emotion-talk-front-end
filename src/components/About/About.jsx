import { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import AboutStyles from "./AboutStyles.module.css";

export default function About() {

    useEffect(() => {
        document.body.style.alignItems = "unset";

        return () => document.body.style.alignItems = "center";
    });
    

    return (        
        <>
            <Navigation/>

            <div className={AboutStyles.aboutPage}>
                <div className={AboutStyles.appInfo}>
                    <img src="favicon.ico" alt="Logo image" />
                    <p>
                        <b>EmotionTalk</b> is an AI app that recognizes how you feel by your speech. 
                        While it can be used for fun, it can also be used in a professional environment 
                        from support centers, psychologists, and all institutions in which human feelings are a factor.
                    </p>
                </div>
                <div className={AboutStyles.teamTypeHeader}>
                    <h3>Developers</h3>
                </div>
                <div className={AboutStyles.team}>
                    <div>
                        <p>
                            <b>Diyan Kalaydzhiev</b> - Full Stack Developer.
                        </p>
                        <p>
                            Diyan is the creator of EmotionTalk. He has built the API, the AI, and the Front-End. 
                            He is a student at New Bulgarian University in Computer Science, a Content Developer, and a Lecturer at Softuni.
                            His leading technologies are Python and JavaScript.
                        </p>

                        <ul>
                            <li>Website: <a href="https://diankalaydzhiev.ml/" target="_blank">diankalaydzhiev.ml</a></li>
                        </ul>
                    </div>
                    <img src="diyan_kalaydzhiev.png" alt="Diyan's image" />
                </div>
                <div className={AboutStyles.teamTypeHeader}>
                    <h3>Designers</h3>
                </div>
            </div>
        </>
    );
}