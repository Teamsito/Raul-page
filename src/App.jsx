import React from "react"
import Navbar from "./components/Navbar/index"
import Infobar from "./components/Infobar/index"
import Banner from './components/molecules/Banner';
import Services from './components/molecules/Services';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Infobar/>
      <Banner/>
      <Services/>
    </div>
  )
}

export default App
