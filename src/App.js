import React, {useState, useEffect} from 'react';
import { API } from './services/API';
import './style/style.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
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
            console.log(response)
        })
        .catch((error)=>console.log(error))
    },[userCoords])

    let today = new Date();
    let date = `${today.getDate()}/${today.getMonth()+1}, ${today.getHours()}:${(today.getMinutes()<10?'0':'') + today.getMinutes()}`
    let background
    if(today.getHours() < 15){
        background = 'bg-morning'
    }else if(today.getHours() < 19){
        background = 'bg-afternoon'
    }else{
        background = 'bg-night'
    }
  return (
    <div className={background}>
        <Header cityName={data.name} date={date}/>
        <Main data={data}/>
        <Footer/>
    </div>
    );
};

export default App;
