import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <div className="head">
      <div
        style={{
          display: 'flex',
          width: '90%',
          margin: '0 auto',
          padding: '1rem 0',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ padding: '1rem 0' }}>Brewmix</div>

        <ul
          style={{
            display: 'flex',
            textDecoration: 'none',
            listStyle: 'none',
            width: '10rem',
            justifyContent: 'space-evenly',
          }}
        >
          <li>Share</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
