import './sidebar.scss'
import LetterAnimation from '../LetterAnimation/LetterAnimation'
import logo from '../../Assests/M.png'
import { useEffect, useState } from 'react'
import {  faAngular,  faCss3,  faGitAlt,  faHtml5,  faJsSquare,  faReact,} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const WelcomePage = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

    const greetingFirstArray = ['W','e', 'l','c','o','m','e',' ', 't','o',' ','t','h','e', ' ']
    const greetingSecondArray = ['a', 'z','e']

  return (
    <div className='sidebar-container'>
        <div className='sidebar-items'>
          <div>
          <LetterAnimation word={greetingFirstArray} letterClass={letterClass} delay={5}/>
          </div>
          <div>
        <img src={logo} className='welcome-page-logo'/>
        <LetterAnimation word={greetingSecondArray} letterClass={letterClass} delay={21}/>
          </div>
      </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default WelcomePage