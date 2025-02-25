import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './Header'
import ContactDetail from './ContactDetail'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="main-content">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
       
        <ContactDetail nombre="Ana García" numero="976-123-4567" correo="ana.garcia@example.com" />
        <ContactDetail nombre="Alan García" numero="965-123-4567" correo="aaaa.garcia@example.com" />
        <ContactDetail nombre="Angel García" numero="985-123-4567" correo="eeee.garcia@example.com" />
        <ContactDetail nombre="Anastacio García" numero="955-123-4567" correo="iiiiiii.garcia@example.com" />
        <ContactDetail nombre="Amber García" numero="945-123-4567" correo="oooooooo.garcia@example.com" />

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App