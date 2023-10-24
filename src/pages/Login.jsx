import React from "react";
import loginImg from "../assets/login.png"

const Login = ({setLoggedIn}) =>{
    return(
        <Tamplate
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={loginImg}
            formType="login"
            setLoggedIn={setLoggedIn}
        />
    )
}

export default Login