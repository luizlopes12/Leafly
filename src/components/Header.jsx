import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Header = ({weather}) => {
    const [iconCode, setIconCode] = useState()
    useEffect(()=>{
      if(!weather){
        console.log('deu ruim');
      }else{
        setIconCode(weather[0].icon)
      }
    })
    console.log(iconCode);
  return (
    <div>
      
      <img src={`http://openweathermap.org/img/wn/${!iconCode? '': iconCode}@2x.png`} alt="" />
    </div>
    );
};

export default Header;
