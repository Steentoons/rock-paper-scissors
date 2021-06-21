import React from 'react'
import PlayChoice from './PlayChoice'

const PlayChoosingSection = () => {
    return (
        <>
            <div className="play-choosing-section-container">
                <div className="play-choosing-section-floating-div">
                    <div className="play-choosing-section-div">
                        <div className="play-choosing-top-two">
                            <PlayChoice />
                            <PlayChoice />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayChoosingSection
