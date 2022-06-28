import './style.css';
import Navbar from "./Navbar"
import Main from "./Main"
import Graylogo from "./Graylogo"
import React from 'react';

export default function App() {
  const [darkmode, setDarkmode]=React.useState(true)
  
  function handleChange() {
    setDarkmode(prevState=>!prevState)
    console.log(darkmode)
  }

  return (
      <div className="container">
          <Navbar darkmode={darkmode} handleChange={handleChange}/>
          <Main darkmode={darkmode} />
      </div>
  )
}
