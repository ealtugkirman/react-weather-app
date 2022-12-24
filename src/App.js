import './App.css';
import axios from "axios";
import City from "./City"
import { useEffect, useState } from 'react';

function App() {
  const key = "84a91b51124f2bc14e2104a40efa11c9";
  const [city, setCity] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search])
  return <div className='App' >
    <div>
      <input onChange={(e)=> setSearch(e.target.value)} type="text" className='border-8 bg-gray-400' />
      {city && <City city={city} />}    </div>
  </div>
}

export default App;
