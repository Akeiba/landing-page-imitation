import React from "react";
import "../Styles/navBar.css";


export default function NavBar() {
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