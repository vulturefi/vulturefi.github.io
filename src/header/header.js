import React from "react";

import './header.css';
import img from '../assets/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={img} />
            <h1 className="title">
                Vulture Finance
            </h1>
        </div>
    );
};

export default Header;