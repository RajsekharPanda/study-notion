import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return(
        <div className="flex"> 
            <Link to = "/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav className="flex">
                <ul className="gap-3 flex">
                    <li><Link to="/">Home</Link></li>
                
                    <li><Link to="/">About</Link></li>
                
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>

            {/* creating buttons for login/signup/logout/dashboard */}

            <div className="flex ml-5 mr-3 gap-3">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/">
                        <button>Log Out</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button>Dashboard</button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar