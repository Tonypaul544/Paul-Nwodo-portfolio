
import { useState } from 'react'
import Header from './header'
import './App.css'
import './Mobile.css'
import Profile from './images/portfoliopfp.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="hameContainer">
        <div className="homeLeft">
            {/* <div className="navbar">
              <div className="innerNav"></div>
            </div> */}

          <div className='welcomeText'>
            <div className="lineHeight">
              <h1 className="greeting">Hello,</h1>
              <h3 className="myName"><em className="im">I`m</em> Paul Nwodo</h3>
            </div>
            
            <p className="description">A software engineer with a passion for building web applications.
              I love to learn new technologies and improve my skills. <br /></p>
            <p className="description2">I am currently looking for a full-time position as a
              software engineer. I am open to remote and on-site opportunities.</p>
            <div className="actionBTNs">
              <button className="actionBTN hireMe">Hire Me</button>
              <button className="actionBTN downloadResume">View Resume</button>
            </div>
          </div>
        </div>

        <div className="homeRight">
          <div className="empty"></div>
          <div className="profile">
            <img src={Profile} alt="" className="profilePic" />
          </div>
        </div>
      </div>
    </>

  )
}

export default App;
