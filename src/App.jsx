import React from "react"
import Navbar from "./components/screen/Navbar"
import Infobar from "./components/screen/Infobar"
import Banner from './components/screen/Banner';
import About from "./components/screen/About"
import Services from './components/screen/Services';
import InfoService from './components/screen/InfoService'
import Contact from './components/screen/Contact'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Infobar/>
      <Banner/>
      <About/>
      <Services/>
      <InfoService/>
      <Contact/>
    </div>
  )
}

export default App
