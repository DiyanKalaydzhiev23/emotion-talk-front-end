import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomeStyles from './HomeStyles.module.scss';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";


export default function Home() {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <Navigation/>

            <div id={HomeStyles.particlesJs}></div>

            <Particles id="tsparticles" url="particlesjs-config.json" init={particlesInit}/>

            <div className={HomeStyles.options}>
                <div>
                    <h2>Professional</h2>
                    <p>History on emotions, Add employees and receive information about how they feel.</p>
                    <span>
                        <a className={HomeStyles.login} href="#">Login</a>
                        <a className={HomeStyles.register} href="#">Register</a>
                    </span>
                </div>
                <div>
                    <h2 id={HomeStyles.tryFree}>Try Free</h2>
                    <p>Talk with AI and let it guess your emotion</p>
                    <span>
                        <Link to="/emotion-talk" className={HomeStyles.justTry}>Let's Go</Link>
                    </span>
                </div>
            </div>

        </>        
    );
}