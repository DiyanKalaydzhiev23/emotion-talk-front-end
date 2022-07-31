import NavigationStyles from './NavigationStyles.module.css';


export default function Navigation() {
    return (
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Login</a>
            <a href="#">Register</a>
            <div className={`${NavigationStyles.animation} ${NavigationStyles.startHome}`}></div>
        </nav>
    );
}