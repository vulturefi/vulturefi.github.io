import React from "react";

import './teaser.css';
import logo from '../assets/logo.png'
import moonbeamLogo from '../assets/moonbeam-logo.png'

const Teaser = () => {
    return (
        <div className="teaser-column">
            <img className="primary-logo" src={logo} />
            <h1 className="coming-soon">
                    COMING SOON
                </h1>
            <div className="stableswap-container">
                <h1 className="stableswap">
                    Stableswap on
                </h1>
                <img className="moonbeam" src={moonbeamLogo} />
            </div>
            <h1 className="low-slippage">
                Low Slippage. Classy UX. Gamified experience
            </h1>
        </div>
    );
}

export default Teaser;