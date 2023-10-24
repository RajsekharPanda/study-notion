import React, { useState } from "react";
import {AiOutLineEye , AiOutLineEyeInvisible } from "react-icons/ai"


const SignupForm =() => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",

    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    return (
        <div>

            {/* student instructor tab */}

            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form>
                {/* firstName and lastName */}
                <div>

                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        />
                    </label>
                
                </div>


                {/* email address */}
                <label>
                        <p>Email Address<sup>*</sup></p>
                        <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        value={formData.email}
                        />
                </label>

                {/* create password and confirm password */}
                <div>
                    <label>
                            <p>Create Password<sup>*</sup></p>
                            <input
                            required
                            type={showPassword? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password}
                            />
                            <span onClick={()=> setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutLineEyeInvisible/>) : (<AiOutLineEye/>)}
                            </span>
                        </label>

                        <label>
                            <p>Confirm Password<sup>*</sup></p>
                            <input
                            required
                            type={showPassword? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            />
                            <span onClick={()=> setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutLineEyeInvisible/>) : (<AiOutLineEye/>)}
                            </span>
                        </label>
                </div>

                <button>Create Account</button>
            </form>


        </div>
    )
}

export default SignupForm