import React, { useState, useEffect } from 'react';
import '../components/headerdesign.css';

const Riskanalysis = () => {
    
    const [cryptos, setCryptos] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      //const[low,setLow] = useState([]);
    
      useEffect(() => {
        // Fetch data from the CoinGecko API
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then((data) => {
            setCryptos(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);

      // More data page2
      useEffect(() => {
        // Fetch data from the CoinGecko API
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then((data) => {
            setCryptos(...cryptos,data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);
      
      /* useEffect(() => {
        // Fetch data from the CoinGecko API
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            return response.json();
          })
          .then((data) => {
            setCryptos(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []); */
      
      
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
      const low = cryptos.filter(coin => coin.price_change_percentage_24h > 2);
      const low2 = cryptos.filter(coin => coin.price_change_percentage_24h > 3);
      const low3 = cryptos.filter(coin => coin.price_change_percentage_24h > 5); 
    
      return (
        <>
        <div className='Riskcontainer container'>
          <p><b>Top 100 Cryptocurrencies By Market Cap</b></p>
          
        </div>
        <div>
        
        </div>
        <div>
          low Risk Crypto
        {low.map((crypto,index) => (
              <tr className='trending_crypto_box'>
              <div key={index}>
                <td> <img className='coin_image'
                  src={crypto.image}
                  alt={crypto.name}
                />
                </td>
                <td>{crypto.name}</td>
                <td>{crypto.symbol}</td>
                <td>{crypto.market_cap_rank}</td>
                <td>{Math.round(crypto.price_change_percentage_24h*1000)/1000}%</td> 
              </div>
              </tr>
            )) }
        </div>
        <div>
          Medium Risk Crypto
        {low2.map((crypto,index) => (
              <tr className='trending_crypto_box'>
              <div key={index}>
                <td> <img className='coin_image'
                  src={crypto.image}
                  alt={crypto.name}
                />
                </td>
                <td>{crypto.name}</td>
                <td>{crypto.symbol}</td>
                <td>{crypto.market_cap_rank}</td>
                <td>{Math.round(crypto.price_change_percentage_24h*1000)/1000}%</td> 
              </div>
              </tr>
            )) }
        </div><div>
          High Risk Crypto
        {low3.map((crypto,index) => (
              <tr className='trending_crypto_box'>
              <div key={index}>
                <td> <img className='coin_image'
                  src={crypto.image}
                  alt={crypto.name}
                />
                </td>
                <td>{crypto.name}</td>
                <td>{crypto.symbol}</td>
                <td>{crypto.market_cap_rank}</td>
                <td>{Math.round(crypto.price_change_percentage_24h*1000)/1000}%</td> 
              </div>
              </tr>
            )) }
        </div>
        </>
      );
}

export default Riskanalysis;


