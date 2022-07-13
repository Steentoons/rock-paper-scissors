import RulesImage from "../assets/images/image-rules.svg"
import IconClose from "../assets/images/icon-close.svg"
import { hideRules } from '../assets/Functions/simpleFn'

// Rules component...
const Rules = () => {
    return (
        <>
          <div className="rules-container">
              <div onClick={hideRules} className="rules-popup-div">
                  <div className="actual-rules">
                      <div className="rules-title-div">
                        <div className="rules-title-mobile">RULES</div>
                        <img onClick={hideRules} src={IconClose} alt="Cancel Rules" />
                      </div>
                      <div className="rules-image-div">
                          <img src={RulesImage} alt="Rock Paper Scissors Rules" />
                      </div>
                      <div className="rules-cancel-mobile">
                            <img onClick={hideRules} src={IconClose} alt="Cancel Rules" />
                        </div>
                      
                  </div>
              </div>
          </div>  
        </>
    )
}

export default Rules
