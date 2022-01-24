import React, {useState, useEffect} from 'react';
import { API } from './services/API';
import Header from './components/Header';
const API_KEY = '48593f081e5bf66c347661da3668026e'
const App = () => {
    const [userCoords, setUserCoords] = useState()
    const [data, setData] = useState([])
    /*
    ///////////////////////
    Getting user coords to use in query 
    ///////////////////////
    */
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(async(position) =>{
            setUserCoords({lat: position.coords.latitude, lon: position.coords.longitude})
          });
    },[])
    /*
    ///////////////////////
    Searching weather data by user lat and long
    ///////////////////////
    */
    useEffect(async()=>{
        let latitude = await userCoords.lat
        let longitude = await userCoords.lon
        API.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then((response) => {
            setData(response.data)
        })
        .catch((error)=>console.log(error))
    },[userCoords])
  return (
    <div>
        <Header weather={data.weather}/>
    </div>
    );
};

export default App;
