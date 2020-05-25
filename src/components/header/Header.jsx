import React from "react";

import logo from '../../image/logo.svg'
import './header.css';


function Header(props) {
    return (
        <header className="header">
            <button className="header__button" onClick={props.handleChange}></button>
            <img src={logo} alt="logo" className="header__logo"/>
        </header>
    );
}

export default Header;