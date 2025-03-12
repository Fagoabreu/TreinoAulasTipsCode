import React from "react";
import Input from "./Input";

function Login(props) {
    return (
        <form className="form">
            <Input
                type="text"
                placeholder="Username"
            />
            <Input
                type="password"
                placeholder="Password"
            />
            {props.userIsRegistered === false && <Input type="password" placeholder="Password Confirm" />}
            <button type="submit">{props.userIsRegistered ? "Login" : "Register"}</button>
        </form>
    );
}

export default Login;