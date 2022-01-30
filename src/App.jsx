import React from 'react'
import Header from './components/Header'
import Lofi from './components/Lofi'
import Sidebar from './components/Sidebar'
import './styles.css'

const App = () => {
  const [lofiMood, setLofiMood] = React.useState('reading')

  return (
    <div className="root">
      <header className="header">
        <Header />
      </header>
      <aside className="sidebar">
        <Sidebar setMood={setLofiMood} />
      </aside>
      <main className="content">
        <Lofi mood={lofiMood} />
      </main>
      <div className="footer">
        Created with ❤️ by{' '}
        <a style={{ color: 'white' }} href="https://twitter.com/s_ayanide">
          @s_ayanide
        </a>
      </div>
    </div>
  )
}

export default App
