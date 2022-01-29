import React from 'react'
import './styles.css'

const Sidebar = ({ setMood }) => {
  const handleMoodChange = (mood) => {
    setMood(mood)
  }

  return (
    <div>
      <div className="mood desktop">
        <div className="sidebar-header">Choose Mood</div>
        <ul className="sidebar-menu">
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('reading')}
          >
            📚 Reading
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('coding')}
          >
            💻 Coding
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('bollywood')}
          >
            🎶 Bollywood
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('night time')}
          >
            🌘 Night Time
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('jazzy')}
          >
            🎺 Jazzy
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('early morning')}
          >
            🌅 Early Morning
          </li>
        </ul>
      </div>
      <div className="mobile mood-mb">
        <div className="sidebar-header">Choose Mood</div>
        <ul className="sidebar-menu">
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('reading')}
          >
            📚 Reading
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('coding')}
          >
            💻 Coding
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('bollywood')}
          >
            🎶 Bollywood
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('night time')}
          >
            🌘 Night Time
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('jazzy')}
          >
            🎺 Jazzy
          </li>
          <li
            className="sidebar-menu-item"
            onClick={() => handleMoodChange('early morning')}
          >
            🌅 Early Morning
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
