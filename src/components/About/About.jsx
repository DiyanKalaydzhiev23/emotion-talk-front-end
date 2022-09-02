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
                            Diyan is the creator of EmotionTalk. He has built the whole app. 
                            He is a student at New Bulgarian University in Computer Science.
                            One of the top 5% of students at Softuni, a Content Developer, and a Lecturer at Softuni.
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
                <div className={AboutStyles.team}>
                    <img src="alexandra_dobreva.png" alt="Alexandra's image" />
                    <div>
                        <p>
                            <b>Alexandra Dobreva - Graphic Designer</b>
                        </p>
                        <p>
                            Alexandra is the creator of the logo for EmotionTalk. 
                            She is a student at New Bulgarian University in Graphic Design. 
                            Аlexandra has won many national and international drawing competitions such as "The popular Vote Award 2019" and "People and Paintings. 
                            At 18, she held her first solo exhibition at Veliko Tarnovo.
                        </p>
                        <ul>
                            <li>Contact: <a href="https://www.instagram.com/alexandra_dobreva/" target="_blank">@alexandra_dobreva</a></li>
                        </ul>
                        </div>
                </div>
                <div className={AboutStyles.team}>
                    <div>
                        <p>
                            <b>Asya Borisova - Graphic Designer</b>
                        </p>
                        <p>
                            Asya is one of the graphic designers working on EmotionTalk. 
                            She is a student at New Bulgarian University in Graphic Design. 
                            Asya's main goal is to be the best at what she does while doing it with great desire and diligence.
                        </p>
                        <ul>
                            <li>Contact: asya.borisova03@gmail.com</li>
                        </ul>
                        </div>

                        <img src="asya_borisova.png" alt="Asya's image" />
                </div>

                <footer>
                    <div>
                        &copy;All rights reserved - EmotionTalk 2022
                    </div>
                </footer>
            </div>
        </>
    );
}