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
    const currentGameStatus = state.computer.gameStatus


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
            store.dispatch(computerChoiceAct(choice))
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
            const playerChoiceGlow = document.querySelector("#player_choice").children
            
            const playAgainDelay = () => {
                setTimeout(() => {
                    gameResult(state)
                    playAgain.style.visibility = "visible"
                }, 1500);
            }

            playAgainDelay()

            if(state.computer.gameStatus === "YOU WIN") {
                alert("winning")
                playerChoiceGlow[0].className = "glowing-winner-container"
            }

            console.log(playerChoiceGlow[0].className)
        }
    },[currentComputerPlay])

    useEffect(() => {
        const playerWinGlow = document.querySelector("#player_choice").children
        const playerLoseGlow = document.querySelector("#comp_choice").children
        if(currentGameStatus === "YOU WIN" && currentGameStatus !== "YOU LOSE" && currentGameStatus !== "A DRAW") {
            playerLoseGlow[0].className = ""

            const winGlowDelay = () => {
                setTimeout(() => {
                    playerWinGlow[0].className = "glowing-winner-container"
                }, 100);
            }

            winGlowDelay()
        }
        else if(currentGameStatus === "YOU LOSE" && currentGameStatus !== "YOU WIN" && currentGameStatus !== "A DRAW") {
            playerWinGlow[0].className = ""

            const loseGlowDelay = () => {
                setTimeout(() => {
                    playerLoseGlow[0].className = "glowing-winner-container"
                }, 100);
            }

            loseGlowDelay()
        }
    },[currentGameStatus, currentComputerPlay])

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
