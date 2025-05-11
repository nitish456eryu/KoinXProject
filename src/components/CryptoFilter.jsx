import React, { useEffect, useState } from 'react';
import './CryptoFilter.css';

const CryptoFilter = () => {
  const [cryptos, setCryptos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    marketCapMin: '',
    marketCapMax: '',
    fdvMin: '',
    fdvMax: '',
    priceChangeMin: '',
    priceChangeMax: '',
    volumeMin: '',
    volumeMax: '',
    volumeChangeMin: '',
    volumeChangeMax: '',
    ageMin: '',
    ageMax: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h'
      );
      const data = await res.json();
      setCryptos(data);
      setFiltered(data);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = (e) => {
    e.preventDefault();

    const inRange = (val, min, max) =>
      (min === '' || val >= parseFloat(min)) &&
      (max === '' || val <= parseFloat(max));

    const getAgeInHours = (dateStr) => {
      if (!dateStr) return 0;
      const created = new Date(dateStr);
      const now = new Date();
      const diffMs = now - created;
      return Math.floor(diffMs / (1000 * 60 * 60));
    };

    const result = cryptos.filter((c) => {
      return (
        inRange(c.market_cap, filters.marketCapMin, filters.marketCapMax) &&
        inRange(c.price_change_percentage_24h, filters.priceChangeMin, filters.priceChangeMax) &&
        inRange(c.total_volume, filters.volumeMin, filters.volumeMax) &&
        inRange(c.price_change_percentage_24h_in_currency, filters.volumeChangeMin, filters.volumeChangeMax) 
      );
    });

    setFiltered(result);
  };

  return (
    <div className="crypto-filter-container">
      <h1>Crypto Filter</h1>
      <form className="filter-grid" onSubmit={applyFilters}>
        {[
          { label: 'Market Cap ($)', nameMin: 'marketCapMin', nameMax: 'marketCapMax' },
          { label: 'Price Change (24h %)', nameMin: 'priceChangeMin', nameMax: 'priceChangeMax' },
          { label: 'Volume (24h $)', nameMin: 'volumeMin', nameMax: 'volumeMax' },
          { label: 'Volume Change (24h %)', nameMin: 'volumeChangeMin', nameMax: 'volumeChangeMax' }
        ].map(({ label, nameMin, nameMax }) => (
          <div className="filter-group" key={nameMin}>
            <label>{label}</label>
            <div className="range-inputs">
              <input
                type="number"
                placeholder="Min"
                name={nameMin}
                value={filters[nameMin]}
                onChange={handleChange}
              /> 
              <input
                type="number"
                placeholder="Max"
                name={nameMax}
                value={filters[nameMax]}
                onChange={handleChange}
              />
            </div> <br />
          </div> 
        ))}

        <div className="filter-btn">
          <button type="submit">Apply Filters</button>
        </div>
      </form>

      <div className="results">
        <h2>Filtered Cryptos ({filtered.length})</h2>
        <ol type='a'>
          {filtered.map((c) => (

            
            <li key={c.id}>
              <img src={c.image} alt={c.name} width={20} style={{ marginRight: 10 }} />
              <strong>{c.name}</strong> — ${c.current_price.toLocaleString()} | Market Cap: ${c.market_cap.toLocaleString()}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CryptoFilter;
