import React from "react";
import signupImg from "../assets/signup.png"

const Signup = () => {
    return(
        <Tamplate
            title="Join the millions learning to code with StudyNotion for free"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={signupImg}
            formType="signup"
            setLoggedIn={setLoggedIn}
        />
    )
}

export default Signup