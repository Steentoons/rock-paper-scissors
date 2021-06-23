import React from 'react'
import { showChosePlay } from '../assets/Functions/simpleFn'

const WinOrLose = () => {
    return (
        <>
           <div className="win-or-lose-container">
               <div className="win-or-lose-text">YOU WIN</div>
               <div className="play-again-container">
                   <button onClick={showChosePlay}>PLAY AGAIN</button>
               </div>
            </div> 
        </>
    )
}

export default WinOrLose
