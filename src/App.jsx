import Header from './components/Header'
import Lofi from './components/Lofi'
import Sidebar from './components/Sidebar'
import './styles.css'

const App = () => {
  return (
    <div className="root">
      <header className="header">
        <Header />
      </header>
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content">
        <Lofi />
      </main>
    </div>
  )
}

export default App
