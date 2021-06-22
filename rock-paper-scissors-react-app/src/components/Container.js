import React from 'react'
import Header from "../components/Header"
import PlayChoosingSection from './PlayChoosingSection'
import ComputerChoice from './ComputerChoice'
import Rules from './Rules'
import WinOrLose from './WinOrLose'

const Container = () => {
    return (
        <>
            <div className="container">
                <Rules />
                <Header />
                <PlayChoosingSection />
                <ComputerChoice />

                <div className="win-or-lose-mobile-container">
                    <WinOrLose />
                </div>

                <div className="rules-button-container">
                    <button>RULES</button>
                </div>
            </div>
        </>
    )
}

export default Container
