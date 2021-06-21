import React from 'react'
import Logo from "../assets/images/logo.svg"

const Header = () => {
    return (
        <>
          <div className="top-section-container">
                <div className="top-section-div">
                    <div className="logo-div">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="score-container">
                        <div className="score-name">SCORE</div>
                        <div className="score-value">12</div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Header
