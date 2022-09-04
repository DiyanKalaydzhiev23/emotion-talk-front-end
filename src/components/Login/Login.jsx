import { login } from "../../services/authServices";
import Navigation from "../Navigation/Navigation";
import TypeWriterTextBox from '../TypeWriterTextBox/TypeWriterTextBox';

export default function Login() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({
            username: e.target.username.value, 
            password: e.target.password.value, 
        });
    }

    return (
        <>
            <Navigation/>
            <TypeWriterTextBox animSec={1} text="Coming Soon..."/>
        </>
    );
}