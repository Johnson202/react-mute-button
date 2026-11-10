import { useState } from 'react'
import onSvg from './assets/on.svg'
import offSvg from './assets/off.svg'
//import './App.css'

function App() {
  const [svgOn, setSvgOn] = useState(true);

  const handleClick = () => {
    setSvgOn((prevState) => {
      const newState = !prevState;
      return newState;
    });
  };

  return (
    <>
      <h1>Mute Button</h1>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{backgroundColor: "white", width: "50px", display: "flex", justifyContent: "center", alignItems: "center", height: "50px"}}>
          <img className="mute-icon" src={svgOn ? onSvg : offSvg} alt='muted/unmuted icon' width={25} height={25} onClick={handleClick} />
        </div>
      </div>
      <h3>---See mute button above---</h3>
    </>
  )
}

export default App
