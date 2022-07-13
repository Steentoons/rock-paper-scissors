import React from 'react'
import PlayChoice from './PlayChoice'
import Triangle from "../assets/images/bg-triangle.svg"
import { playerChoiceChild } from '../assets/Functions/simpleFn'
import { useSelector } from 'react-redux'

import RockImage from "../assets/images/icon-rock.svg"
import PaperImage from "../assets/images/icon-paper.svg"
import ScissorsImage from "../assets/images/icon-scissors.svg"

// Player component...
const PlayChoosingSection = () => {
    const state = useSelector(state => state)
    return (
        <>
            <div className="play-choosing-section-container">
                <div className="play-choosing-section-floating-div">
                    <div className="play-choosing-section-div">
                        <div className="play-choosing-top-two-container">
                            <div id="player_paper" onClick={playerChoiceChild} className="actual-choice-div-container player-paper">
                                <PlayChoice imgSrc={PaperImage} />
                            </div>
                            <div id="player_scissors" onClick={(e) => playerChoiceChild(e,state)} className="actual-choice-div-container player-scissors">
                                <PlayChoice imgSrc={ScissorsImage} />
                            </div>
                        </div>
                        <div className="play-choosing-bottom-solo-container">
                            
                            <div id="player_rock" onClick={(e) => {
                                    playerChoiceChild(e,state)
                                }} className="actual-choice-div-container player-rock">
                                <PlayChoice imgSrc={RockImage} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-triangle-container">
                    <div className="back-triangle-div">
                        <img src={Triangle} alt="Play Choice Triangle" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayChoosingSection
