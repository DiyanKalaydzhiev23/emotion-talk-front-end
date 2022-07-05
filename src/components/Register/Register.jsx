import { register } from "../../services/authServices";

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
        <form onSubmit={async (e) => await handleSubmit(e)}>
            <article className="input-group">
                <label htmlFor="username">Username</label>
                <input type="username" name="username" id="username" className="form-input"/>
            </article>
            
            <article className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-input"/>
            </article>

            <article className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="form-input"/>
            </article>
            
            <article className="input-group">
                <label htmlFor="repeat-password">Confirm Password</label>
                <input type="password" name="repeatPassword" id="repeat-password" className="form-input"/>
            </article>

            <article className="input-group">
                <input type="submit" value="Register" />
            </article>
        </form>
    );
}