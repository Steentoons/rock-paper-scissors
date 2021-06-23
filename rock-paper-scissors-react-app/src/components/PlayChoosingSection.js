import React from 'react'
import PlayChoice from './PlayChoice'
import Triangle from "../assets/images/bg-triangle.svg"
import { playerMove } from '../assets/Functions/simpleFn'

const PlayChoosingSection = () => {
    return (
        <>
            <div className="play-choosing-section-container">
                <div className="play-choosing-section-floating-div">
                    <div className="play-choosing-section-div">
                        <div className="play-choosing-top-two-container">
                            <div id="player_paper" onClick={playerMove} className="actual-choice-div-container player-paper">
                                <PlayChoice />
                            </div>
                            <div id="player_scissors" onClick={playerMove} className="actual-choice-div-container player-scissors">
                                <PlayChoice />
                            </div>
                        </div>
                        <div className="play-choosing-bottom-solo-container">
                            <div id="player_rock" onClick={playerMove} className="actual-choice-div-container player-rock">
                                <PlayChoice />
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
