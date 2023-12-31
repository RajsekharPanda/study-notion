import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { toast } from "react-hot-toast";
const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto"> 
            <Link to = "/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav className="flex">
                <ul className="gap-x-6 flex text-richblack-100">
                    <li><Link to="/">Home</Link></li>
                
                    <li><Link to="/">About</Link></li>
                
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>

            {/* creating buttons for login/signup/logout/dashboard */}

            <div className="flex items-center gap-x-4">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success('Logged Out')
                        }} className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log out</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="text-richblack-100 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar