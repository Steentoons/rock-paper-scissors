import React from 'react'
import PlayChoice from './PlayChoice'

const ComputerChoice = () => {
    return (
        <>
            <div className="play-choosing-section-container">
                <div className="play-choosing-section-floating-div">
                    <div className="play-choosing-section-div">
                        <div className="play-choosing-top-two-container">
                            <div className="play-choice-div">
                                <PlayChoice />
                                <div className="play-choice-title-container">
                                    <div className="play-choice-title">YOU PICKED</div>
                                </div>
                            </div>
                            <div className="play-choice-div">
                                <PlayChoice />
                                <div className="play-choice-title-container">
                                    <div className="play-choice-title">THE HOUSE PICKED</div>
                                </div>
                            </div>
                            
                            {/* <div className="empty-computer-choice"></div> */}
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ComputerChoice
