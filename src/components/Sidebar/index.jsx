import React from 'react'
import './styles.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="sidebar-header">Choose Mood</div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">📚 Reading</li>
          <li className="sidebar-menu-item">💻 Coding</li>
          <li className="sidebar-menu-item">🎶 Bollywood</li>
          <li className="sidebar-menu-item">🌘 Night Study</li>
          <li className="sidebar-menu-item">🎺 Jazzy</li>
          <li className="sidebar-menu-item">🌅 Early Morning</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
