import React from "react"
import Navbar from "./components/Navbar/index"
import Infobar from "./components/Infobar/index"
import Banner from './components/molecules/Banner';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Infobar/>
      <Banner/>
    </div>
  )
}

export default App
