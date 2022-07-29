import React from "react"
import Navbar from "./components/Navbar/index"
import Infobar from "./components/Infobar/index"
import Banner from './components/molecules/Banner';
import About from "./components/About/index"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Infobar/>
      <Banner/>
      <About/>
    </div>
  )
}

export default App
