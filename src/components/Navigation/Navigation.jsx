import NavigationStyles from './NavigationStyles.module.scss';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


export default function Navigation() {
    const location = useLocation();
    const [anim, setAnim] = useState(NavigationStyles.animation1);
    
    if (location.pathname == '/emotion-talk' && anim != NavigationStyles.animation5) {
        setAnim(NavigationStyles.animation5);
    } else if (location.pathname == '/' && anim != NavigationStyles.animation1) {
        setAnim(NavigationStyles.animation1);
    } else if (location.pathname == '/about' && anim != NavigationStyles.animation2) {
        setAnim(NavigationStyles.animation2);
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <Link to="/emotion-talk">AI Talk</Link>
            <div className={`${NavigationStyles.animation} ${anim}`}></div>
        </nav>
    );
}