import { useState } from 'react'
import './App.css'
//import Promocard from './components/promocard'
import Header from './components/Header';
import About from './components/Aboutbitcoin';
import Trendingcoin from './components/trendingcoin';
//<Promocard />


function App() {
  

  return (
    <>
      
      <Header />
      <About />
      <Trendingcoin />
    </>
  )
}

export default App
