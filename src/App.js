import { Button } from './components/Button';
import { Input } from './components/Input';
import { Typography } from './components/Typography';
import { Heading } from './components/Heading';  
import { Tooltip } from './components/Tooltip';
import { Accordion } from './components/Accordion';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



function App() {

    const [cryptoData, setCryptoData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        console.log('Fetching data...'); // This will be displayed first (log for check)
        const response = await axios.get('https://api.coinlore.net/api/tickers/');
        console.log('Data fetched:', response.data.data); // This is the data we want to display (log for data)

        setCryptoData(response.data.data);
        setFilteredData(response.data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);


    const handleSearch = (e) => {
        setSearch(e.target.value);
        setFilteredData(
          cryptoData.filter((crypto) =>
            `${crypto.name} ${crypto.symbol}`
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
        );
      };
    
      return (
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="flex-column-start">
            <Heading variant="h1">Cryptocurrency Prices</Heading>
            <Button onClick={fetchData} variant = "bordered">Update</Button>
            <Input
              value={search}
              onChange={handleSearch}
              placeholder="Search"
            />
          </div>
          <div>
          {filteredData.map((crypto) => (
            <Accordion title={crypto.name}>
              <div>
                  <div><b>Symbol:</b> {crypto.symbol}</div>
                  <div><b>Price USD:</b> {crypto.price_usd}</div>
                  <div><b>Price BTC:</b> {crypto.price_btc}</div>
                  <Tooltip text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
                    <span><b>Market Cap USD:</b></span>
                  </Tooltip>
                  <span> {crypto.market_cap_usd}</span>
                  <div>
                    <b>Percent Change 24H:</b> <span style={{color: "red"}}>{crypto.percent_change_24h}%</span>
                  </div>
                </div>
            </Accordion>
          ))}
          </div>
        </div>
    );
};


export default App;
