import React, { useState, useEffect } from 'react';
import '../components/headerdesign.css';

const Trendingcoin = () => {
  const [trendingCryptos, setTrendingCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the CoinGecko API
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setTrendingCryptos(data.coins);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Render loading state, error state, or the list of trending cryptocurrencies
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <p>Trending Cryptocurrencies</p>
      <ul style={{daisplay:'flex'}}>
        <div className='showw'>
        {trendingCryptos.map((crypto) => (
          <div>
          <li key={crypto.item.id}>
            <img
              src={crypto.item.thumb}
              alt={crypto.item.name}
            />
    <h6>{crypto.item.name}</h6> 
            <p>{crypto.item.symbol}</p>
          </li>
          </div>
        ))}
        </div>
      </ul>
    </div>
  );
};

export default Trendingcoin;

