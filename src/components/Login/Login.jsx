import { login } from "../../services/authServices";

export default function Login() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({
            username: e.target.username.value, 
            password: e.target.password.value, 
        });
    }

    return (
        <form onSubmit={async (e) => await handleSubmit(e)}>
            <article className="input-group">
                <label htmlFor="username">Username</label>
                <input type="username" name="username" id="username" className="form-input"/>
            </article>

            <article className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="form-input"/>
            </article>
            
            <article className="input-group">
                <input type="submit" value="Log in" />
            </article>
        </form>
    );
}