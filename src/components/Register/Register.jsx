import { register } from "../../services/authServices";
import Navigation from "../Navigation/Navigation";
import TypeWriterTextBox from '../TypeWriterTextBox/TypeWriterTextBox';

export default function Register() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register({
            username: e.target.username.value, 
            password: e.target.password.value, 
            email: e.target.email.value,
        });
    }

    return (
        <>
            <Navigation/>
            <TypeWriterTextBox animSec={1} text="Coming Soon..."/>
        </>
    );
}