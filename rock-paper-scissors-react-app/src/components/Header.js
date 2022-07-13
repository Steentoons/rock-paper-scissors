import React from 'react'
import Logo from "../assets/images/logo.svg"
import { useSelector } from "react-redux"

// Header component...
const Header = () => {
    const state = useSelector(state => state.computer.userScore)
    return (
        <>
          <div className="top-section-container">
                <div className="top-section-div">
                    <div className="logo-div">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="score-container">
                        <div className="score-name">SCORE</div>
                        <div className="score-value">{state}</div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Header
