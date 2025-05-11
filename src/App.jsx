import { useState } from 'react'
import './App.css'
//import Promocard from './components/promocard'
import Header from './components/Header';
import About from './components/Aboutbitcoin';
import CoinList from './components/trendingcoin'; //
import Footer from './components/footer';
import Riskanalysis from './components/RiskAnalysis';
// import TradingViewWidget from './components/tradingview'
import TopCrypto from './components/topCrypto';
import CryptoFilter from './components/CryptoFilter';
//<Promocard />


function App() {
  

  return (
    <>
      <Header />
      
      <About />
      <CoinList />
      <TopCrypto />
      <CryptoFilter />
      <Footer />
      
    </>
  )
}

export default App
