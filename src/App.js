import React, {useState, useEffect} from 'react';
import { API } from './services/API';
const API_KEY = '48593f081e5bf66c347661da3668026e'
const city = 'Registro'
const App = () => {
    /*
    ///////////////////////
    Searching weather data
    ///////////////////////
    */
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
      });
    const [data, setData] = useState([])
    useEffect(()=>{
        API.get(`/weather?q=${city}&appid=${API_KEY}`)
        .then((response) => {
            setData(response.data) 
        })
        .catch((error)=>console.log(error))
    },[])
    console.log(data);
    console.log(data.weather);
  return (
    <div>

    </div>
    );
};

export default App;
