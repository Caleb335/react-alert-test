
// the signup form component
import React from 'react'
import { withAlert } from "react-alert";
import validateSignUp from "/components/ValidateSignup.js";

const SignUp = ({ alert }) => {
    const [fullname, setFullName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [pwdConfirm, setPwdConfrim] = React.useState("");


    // handles the submit event once the user clicks on the button
    const handleSubmit = (e) => {
        e.preventDefault();

        const validate = validateSignUp(email, password, pwdConfirm, alert || " ");

        if (validate) {
            alert.success("You've signed up successfully. Proceed to login");
        }
    };

    return (
        <section className="">
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <p>Email Address</p>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={`form-control`}
                            defaultText="youremail@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <p>Enter Password</p>
                        <input
                            name="password"
                            id="pwd"
                            className={`form-control`}
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <p>Confirm Password</p>
                        <input
                            name="confirm__pwd"
                            id="pwd__conf"
                            className={`form-control`}
                            placeholder="enter your password again"
                            value={pwdConfirm}
                            onChange={(e) => setPwdConfrim(e.target.value)}
                        />
                    </div>
                    <button className={`btn-primary`}>Sign up</button>
                </form>
            </div>
        </section>
    );
};

export default withAlert()(SignUp);
