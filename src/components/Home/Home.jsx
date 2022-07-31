import Navigation from "../Navigation/Navigation";
import HomeStyles from './HomeStyles.module.scss';


export default function Home() {
    return (
        <>
            <Navigation/>
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
                        <a className={HomeStyles.justTry} href="#">Let's Go</a>
                    </span>
                </div>
            </div>
        </>        
    );
}