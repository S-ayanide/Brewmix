import { useStoreActions } from 'easy-peasy'
import React from 'react'
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import './styles.css'

const Header = () => {
  const setMenuOpen = useStoreActions((actions) => actions.setMenuOpen)
  const [socialMenuOpen, setSocialMenuOpen] = React.useState(false)

  return (
    <div className="head">
      <div className="navbar">
        <div className="mobile" onClick={() => setMenuOpen(true)}>
          <img
            alt="svgImg"
            className="hamburger"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTAsMjUuOHYxNy4yaDE3MnYtMTcuMnpNMCw3Ny40djE3LjJoMTcydi0xNy4yek0wLDEyOXYxNy4yaDE3MnYtMTcuMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
          />
        </div>
        {socialMenuOpen && (
          <div className="socialDiv">
            <FacebookShareButton
              url="http://localhost:3000/"
              quote="Hey! Check out this amazing LoFi chilling zone I found out about called brewmix."
              hastag="#lofi"
            >
              <img
                style={{ height: '2rem', width: '2rem' }}
                src="https://img.icons8.com/doodle/48/000000/facebook-new.png"
              />
            </FacebookShareButton>
            <TelegramShareButton
              url="http://localhost:3000/"
              title="Hey! Check out this amazing LoFi chilling zone I found out about called brewmix."
            >
              <img
                style={{ height: '2rem', width: '2rem' }}
                src="https://img.icons8.com/doodle/48/000000/telegram-app.png"
              />
            </TelegramShareButton>
            <TwitterShareButton
              url="http://localhost:3000/"
              title="Hey! Check out this amazing LoFi chilling zone I found out about called brewmix."
              via="@s_ayanide"
            >
              <img
                style={{ height: '2rem', width: '2rem' }}
                src="https://img.icons8.com/doodle/48/000000/twitter--v1.png"
              />
            </TwitterShareButton>
            <WhatsappShareButton
              url="http://localhost:3000/"
              title="Hey! Check out this amazing LoFi chilling zone I found out about called brewmix."
            >
              <img
                style={{ height: '2rem', width: '2rem' }}
                src="https://img.icons8.com/doodle/48/000000/whatsapp.png"
              />
            </WhatsappShareButton>
          </div>
        )}
        <div style={{ display: 'flex', padding: '1rem 0' }}>
          <img
            src="./icons/Brewmix.png"
            alt="Brewmix logo"
            style={{
              height: '2.5rem',
              width: '2.5rem',
              marginRight: '1rem',
              marginTop: '-0.8rem',
            }}
          />
          <div style={{ fontWeight: 'bold' }}>Brewmix</div>
        </div>

        <ul
          style={{
            display: 'flex',
            textDecoration: 'none',
            listStyle: 'none',
            width: 'fit-content',
            padding: 0,
          }}
        >
          <li>
            <img
              style={{
                cursor: 'pointer',
                padding: '0 1rem',
                height: '1.5rem',
                width: '1.5rem',
              }}
              onClick={() => setSocialMenuOpen((prev) => !prev)}
              src={'./icons/share.svg'}
              alt="Share"
            />
          </li>
          <li>
            <img
              style={{ cursor: 'pointer', height: '1.5rem', width: '1.5rem' }}
              onClick={() => window.open('https://coindrop.to/sayanide')}
              src={'./icons/heart.png'}
              alt="Support"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
