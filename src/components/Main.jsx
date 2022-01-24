import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Main = ({data}) => {
  const [iconCode, setIconCode] = useState()
  const [temp, setTemp] = useState()
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [feels, setFeels] = useState()
  const [humidity, setHumidity] = useState()
  const [wind, setWind] = useState()
  const [description, setDescription] = useState()
  console.log(data);
  useEffect(()=>{
    if(!data.weather  && !data.main){
      console.log('deu ruim');
    }else{
      setIconCode(data.weather[0].icon)
      setTemp(parseInt(data.main.temp - 273.15))
      setMin(parseInt(data.main.temp_min - 273.15))
      setMax(parseInt(data.main.temp_max - 273.15))
      setWind(parseInt(data.wind.speed * 3.6))
      setFeels(parseInt(data.main.feels_like - 273.15))
      setHumidity(data.main.humidity)
      setDescription(data.weather[0].description)
    }
  })
  console.log(description);
return (
  <div className='temp container'>
    <div className="row-fluid d-flex flex-column align-items-center">
      <div className="col d-flex flex-column align-items-center justify-content-center">
      <img src={`http://openweathermap.org/img/wn/${!iconCode? '': iconCode}@2x.png`} alt="" />
      <hr/>
      <p className='fs-1'>{temp}°</p>
      </div>
      <div className="col text-center">
        {max}° / {min}° <span className='mx-1 fs-5'>|</span> Feels like {feels}°
      </div>
      <div className="col text-center mt-2 mb-2 fs-4 fw-light text-capitalize">
        {description}
      </div>
        <div className="col-10 col-sm-3 d-flex justify-content-between">
          Wind Speed: <p className='mb-0'>{wind} Km/h</p>
        </div>
        <div className="col-10 col-sm-3 d-flex justify-content-between">
        Air Humidity: <p className='mb-0'>{humidity}%</p>
        </div>
    </div>
  </div>
  );
};

export default Main;
