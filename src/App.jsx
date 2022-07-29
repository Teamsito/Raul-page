import React from "react"
import Navbar from "./components/screen/Navbar"
import Infobar from "./components/screen/Infobar"
import Banner from './components/screen/Banner';
import About from "./components/screen/About"
import Services from './components/screen/Services';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Infobar/>
      <Banner/>
      <About/>
      <Services/>
    </div>
  )
}

export default App
