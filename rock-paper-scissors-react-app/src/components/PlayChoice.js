import React from 'react'
import RockImage from "../assets/images/icon-rock.svg"
import GlowingWinner from './GlowingWinner'

const PlayChoice = () => {
    return (
        <>
            <div className="actual-choice-div-container">
                {/* <GlowingWinner /> */}
               <div className="choice-button-thickness"></div>
               <div className="choice-button-bottom-thickness"></div>
               <div className="choice-button-main-circle"></div>
               <div className="choice-image-div">
                   <img src={RockImage} alt="Rock" />
               </div>
            </div>
        </>
    )
}

export default PlayChoice
