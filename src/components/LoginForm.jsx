import React, { useState } from "react";
import {AiOutLineEye , AiOutLineEyeInvisible } from "react-icons/ai"

const LoginForm =() => {
    const [formData, setFormData] = useState({
        email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false)
    function changeHandler(event){
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }
    return (
        <form>
            <label>
                <p>Email Address <sup>*</sup></p>
                <input 
                type="text"
                required 
                value={formData.email} 
                onChange={changeHandler}
                placeholder="Enter email id"
                />
            </label>
            <label>
                <p>Password<sup>*</sup></p>
                <input 
                type={showPassword ? ("text") : ("password")}
                required 
                value={formData.password} 
                onChange={changeHandler}
                placeholder="Enter Password"
                />

                <span>
                    {showPassword ? () : ()}
                </span>
            </label>
        </form>
    )
}

export default LoginForm