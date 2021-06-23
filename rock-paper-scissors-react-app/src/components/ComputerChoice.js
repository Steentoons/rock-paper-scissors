import React from 'react'
import PlayChoice from './PlayChoice'
import WinOrLose from './WinOrLose'

const ComputerChoice = () => {
    return (
        <>
            <div className="play-choosing-computer-section-container">
                <div className="play-choosing-section-floating-div">
                    <div className="play-choosing-section-div">
                        <div className="play-computer-choosing-top-two-container">
                            <div className="play-choice-div">
                                <div className="play-choice-title-desktop-container">
                                    <div className="play-choice-title">THE HOUSE PICKED</div>
                                </div>
                                <div id="player_choice" className="actual-choice-div-container">
                                    <PlayChoice />
                                </div>
                                <div className="play-choice-title-container">
                                    <div className="play-choice-title">YOU PICKED</div>
                                </div>
                            </div>
                            <div className="winning-message-middle-container">
                                <div className="winning-message-middle-div">
                                    <WinOrLose />
                                </div>
                            </div>
                            <div className="play-choice-div">
                                <div className="play-choice-title-desktop-container">
                                    <div className="play-choice-title">THE HOUSE PICKED</div>
                                </div>
                                <div id="comp_choice" className="actual-choice-div-container">
                                    <PlayChoice />
                                </div>
                                <div id="before_comp_choice" className="actual-choice-div-container">
                                    <PlayChoice />
                                </div>
                                {/* <div className="empty-computer-choice"></div> */}
                                <div className="play-choice-title-container">
                                    <div className="play-choice-title">THE HOUSE PICKED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ComputerChoice
