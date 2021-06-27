import React from 'react'
import PlayChoice from './PlayChoice'
import WinOrLose from './WinOrLose'
import { useSelector } from 'react-redux'
import { useEffect } from "react"

import RockImage from "../assets/images/icon-rock.svg"
import PaperImage from "../assets/images/icon-paper.svg"
import ScissorsImage from "../assets/images/icon-scissors.svg"
import { store } from '../redux/store'
import { computerMove } from "../assets/Functions/simpleFn"
import computerChoiceAct from '../redux/actions/computerChoiceAct'

const ComputerChoice = () => {
    const state = useSelector(state => state)

    let userPlayImg = RockImage
    const currentUserPlay = state.player.userPlay
    const currentComputerPlay = state.computer.computerPlay


    // const currentUserPlay = ""
    useEffect(() => {
        if(currentUserPlay !== "") {
            const currentPlayerElement = document.querySelector("#player_choice")
            if(currentUserPlay === "rock") {
                userPlayImg = RockImage
                currentPlayerElement.classList.add("player-rock")
            }
            else if(currentUserPlay === "paper") {
                userPlayImg = PaperImage
                currentPlayerElement.classList.add("player-paper")
            }
            else if(currentUserPlay === "scissors") {
                userPlayImg = ScissorsImage
                currentPlayerElement.classList.add("player-scissors")
            }
            const choice = computerMove()
            store.dispatch(computerChoiceAct(choice))
        } 
    }, [currentUserPlay])

    useEffect(() => {
        if(currentComputerPlay !== "") {
            const currentCompElement = document.querySelector("#comp_choice")
            // alert("The current computer play before manipulation is :" + currentComputerPlay)
    
            if(currentComputerPlay === "rock") {
                userPlayImg = RockImage
                currentCompElement.classList.add("player-rock")
            }
            else if(currentComputerPlay === "paper") {
                userPlayImg = PaperImage
                currentCompElement.classList.add("player-paper")
            }
            else if(currentComputerPlay === "scissors") {
                userPlayImg = ScissorsImage
                currentCompElement.classList.add("player-scissors")
            }
        }
         
    }, [currentComputerPlay])

    return (
        <>
            <div className="play-choosing-computer-section-container">
                <div className="play-choosing-section-floating-div">
                    <div className="play-choosing-section-div">
                        <div className="play-computer-choosing-top-two-container">
                            <div className="play-choice-div">
                                <div className="play-choice-title-desktop-container">
                                    <div className="play-choice-title">YOU PICKED</div>
                                </div>
                                <div id="player_choice" className="actual-choice-div-container">
                                    <PlayChoice imgSrc={userPlayImg} />
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
                                    <PlayChoice imgSrc={RockImage} />
                                </div>
                                <div id="before_comp_choice" className="actual-choice-div-container">
                                    <PlayChoice imgSrc={RockImage} />
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
