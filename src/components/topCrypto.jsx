// src/App.js
import React, { useEffect, useState } from 'react';
import './topCrypto.css';

import SearchBar from './SearchBar';

function TopCrypto() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
      .then(res => res.json())
      .then(data => {
        setCoins(data);
        setFilteredCoins(data);
        setLoading(false);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (query) => {
    const filtered = coins.filter(coin =>
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCoins(filtered);
  };

  return (
    <div className="app-container">
      <h1>📊 Top 100 Cryptocurrencies</h1>
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className="loading">Loading data...</p>
      ) : (
        <div className="table-wrapper">
          <table className="crypto-table">
            <thead>
              <tr>
                <td>#</td>
                <td>Coin</td>
                <td>Price</td>
                <td>24h %</td>
                <td>Market Cap</td>
              </tr>
            </thead>
            <tbody>
              {filteredCoins.map((coin, index) => (
                <tr key={coin.id}>
                  <td>{index + 1}</td>
                  <td className="coin-cell">
                    <img src={coin.image} alt={coin.name} />
                    <div>
                      <div className="coin-name">{coin.name}</div>
                      <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
                    </div>
                  </td>
                  <td>${coin.current_price.toLocaleString()}</td>
                  <td className={coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}>
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </td>
                  <td>${coin.market_cap.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
    </div>
  );
}


export default TopCrypto;
