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
import { gameResult } from '../assets/Functions/simpleFn'

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
                currentPlayerElement.className = "actual-choice-div-container player-rock"
            }
            else if(currentUserPlay === "paper") {
                userPlayImg = PaperImage
                currentPlayerElement.className = "actual-choice-div-container player-paper"
            }
            else if(currentUserPlay === "scissors") {
                userPlayImg = ScissorsImage
                currentPlayerElement.className = "actual-choice-div-container player-scissors"
            }

            const choice = computerMove()
            const compPlayDelay = () => {
                setTimeout(() => {
                    alert("Are you really delayed?")
                    store.dispatch(computerChoiceAct(choice))
                }, 5000)
            }

            compPlayDelay()
        } 
    }, [currentUserPlay])

    useEffect(() => {
        if(currentComputerPlay !== "") {
            const currentCompElement = document.querySelector("#comp_choice")
            // alert("The current computer play before manipulation is :" + currentComputerPlay)
    
            if(currentComputerPlay === "rock") {
                userPlayImg = RockImage
                currentCompElement.className = "actual-choice-div-container player-rock"
            }
            else if(currentComputerPlay === "paper") {
                userPlayImg = PaperImage
                currentCompElement.className = "actual-choice-div-container player-paper"
            }
            else if(currentComputerPlay === "scissors") {
                userPlayImg = ScissorsImage
                currentCompElement.className = "actual-choice-div-container player-scissors"
            }
        }
         
    }, [currentComputerPlay])

    useEffect(() => {
        if(currentComputerPlay !== undefined && currentComputerPlay !== "") {
            const playAgain = document.querySelector(".win-or-lose-mobile-container")
            gameResult(state)
            playAgain.style.visibility = "visible"
        }
    },[currentComputerPlay])

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
                                    <PlayChoice imgSrc={state.player.eventElement.playerPath} />
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
                                    <PlayChoice imgSrc={state.player.eventElement.computerPath} />
                                </div>
                                <div id="before_comp_choice" className="actual-choice-div-container">
                                    {/* <PlayChoice imgSrc={} /> */}
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
