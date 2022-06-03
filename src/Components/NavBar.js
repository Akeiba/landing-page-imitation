import React from "react";
import "../Styles/navBar.css";


const NavBar = () => {
    return (
        <>
        <div className="nav-container">
        <div className="nav-left">
        <p >Home</p>
        <p>About</p> 
        <p>Testimonials</p>
        <p>Contact</p>
        </div>

        <div className="nav-logo">
        <h1>smartHome</h1>
        </div>
        
        <div className="nav-right">
        <p>Login</p>
        <p className="btn">Signup</p>
        </div>
        
        </div>
        </>
    )
};

export default NavBar;