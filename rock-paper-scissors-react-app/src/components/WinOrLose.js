import React from 'react'
import { showChosePlay } from '../assets/Functions/simpleFn'
import { useSelector } from "react-redux"

const WinOrLose = () => {
    const state = useSelector(state => state.computer.gameStatus)
    return (
        <>
           <div className="win-or-lose-container">
               <div className="win-or-lose-div">
                    <div className="win-or-lose-text">{state}</div>
                    <div className="play-again-container">
                        <button onClick={showChosePlay}>PLAY AGAIN</button>
                    </div>
               </div>
            </div> 
        </>
    )
}

export default WinOrLose
