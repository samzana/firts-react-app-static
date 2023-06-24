import React from "react";
import logo from "../images/reactjs-icon.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} className="nav--icon"></img>
            <h1 className="nav--logo_text"> ReactFacts</h1>
            <p className="nav--title"> React Course - Project 1</p>
        </nav>
    )
}