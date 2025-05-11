import React, { useEffect, useState } from 'react';
import './headerdesign.css';

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(res => res.json())
      .then(data => {
        setCoins(data.coins);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching trending coins:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div className='trending_coin_heading'>Trending Coins</div>
    <div className="coin-list">
      {coins.map((coinObj, index) => {
        const coin = coinObj.item;
        return (
          <div className="coin-card" key={coin.id}>
            <img src={coin.small} alt={coin.name} />
            <h2>{coin.name}</h2>
            <p>{coin.symbol.toUpperCase()}</p>
            <a
              href={`https://www.coingecko.com/en/coins/${coin.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on CoinGecko
            </a>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default CoinList;
