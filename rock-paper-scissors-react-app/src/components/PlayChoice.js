import React from 'react'
import GlowingWinner from './GlowingWinner'
import { playerChoiceImgChild } from '../assets/Functions/simpleFn'
import { useSelector } from 'react-redux'

const PlayChoice = (props) => {
    const state = useSelector(state => state)
    return (
        <>
            <GlowingWinner />
            <div className="choice-button-thickness"></div>
            <div className="choice-button-bottom-thickness"></div>
            <div className="choice-button-main-circle"></div>
            <div className="choice-image-div">
               <img onClick={(e) => playerChoiceImgChild(e, state)} src={props.imgSrc} alt="Rock" />
            </div>
        </>
    )
}

export default PlayChoice
