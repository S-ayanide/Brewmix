import React from 'react'
import './styles.css'

const Vibe = ({ forestClick, rainClick, setRainClick, setForestClick }) => {
  const togglePlay = (clickedVibe) => {
    if (clickedVibe.toLowerCase() === 'rain')
      setRainClick((prevState) => !prevState)
    if (clickedVibe.toLowerCase() === 'forest')
      setForestClick((prevState) => !prevState)
  }

  return (
    <div className="vibe">
      <div className="vibe-header">Choose Vibe</div>
      <ul className="vibe-menu">
        <li className="vibe-menu-item">
          <div className="vibeItem">
            <div onClick={() => togglePlay('rain')}>
              {rainClick ? '⏸️' : '▶️'}
            </div>{' '}
            Rain ⛈️
          </div>
        </li>
        <li className="vibe-menu-item">
          <div className="vibeItem">
            <div onClick={() => togglePlay('forest')}>
              {forestClick ? '⏸️' : '▶️'}
            </div>{' '}
            Forest 🌲
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Vibe
