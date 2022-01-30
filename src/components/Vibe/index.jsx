import { useStoreActions, useStoreState } from 'easy-peasy'
import PropTypes from 'prop-types'
import React from 'react'
import './styles.css'

const Vibe = ({ forestClick, rainClick, setRainClick, setForestClick }) => {
  const rainClickMobile = useStoreState((state) => state.rainClickMobile)
  const forestClickMobile = useStoreState((state) => state.forestClickMobile)
  const setRainClickMobile = useStoreActions(
    (actions) => actions.setRainClickMobile,
  )
  const setForestClickMobile = useStoreActions(
    (actions) => actions.setForestClickMobile,
  )

  const togglePlay = (clickedVibe) => {
    if (clickedVibe.toLowerCase() === 'rain')
      setRainClick((prevState) => !prevState)
    if (clickedVibe.toLowerCase() === 'forest')
      setForestClick((prevState) => !prevState)
  }

  return (
    <>
      <div className="vibe desktop">
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
      {/* <div className="vibe-mb mobile">
        <div className="vibe-header">Choose Vibe</div>
        <ul className="vibe-menu">
          <li className="vibe-menu-item">
            <div className="vibeItem">
              <div onClick={() => setRainClickMobile(!rainClickMobile)}>
                {rainClickMobile ? '⏸️' : '▶️'}
              </div>{' '}
              <div className="vibeName">Rain ⛈️</div>
            </div>
          </li>
          <li className="vibe-menu-item">
            <div className="vibeItem">
              <div onClick={() => setForestClickMobile(!forestClickMobile)}>
                {forestClickMobile ? '⏸️' : '▶️'}
              </div>{' '}
              <div className="vibeName">Forest 🌲</div>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  )
}

Vibe.propTypes = {
  forestClick: PropTypes.bool,
  rainClick: PropTypes.bool,
  setRainClick: PropTypes.func,
  setForestClick: PropTypes.func,
}

export default Vibe
