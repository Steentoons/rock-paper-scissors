import React from 'react'
import RulesImage from "../assets/images/image-rules.svg"
import IconClose from "../assets/images/icon-close.svg"

const Rules = () => {
    return (
        <>
          <div className="rules-container">
              <div className="rules-popup-div">
                  <div className="actual-rules">
                      <div className="rules-title-mobile">RULES</div>
                      <div className="rules-image-div">
                          <img src={RulesImage} alt="Rock Paper Scissors Rules" />
                      </div>
                      <div className="rules-cancel-mobile">
                          <img src={IconClose} alt="Cancel Rules" />
                      </div>
                  </div>
              </div>
          </div>  
        </>
    )
}

export default Rules
