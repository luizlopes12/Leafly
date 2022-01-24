import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Header = ({cityName}) => {
  let today = new Date();
  let date = `${today.getDate()}/${today.getMonth()+1}, ${today.getHours()}:${(today.getMinutes()<10?'0':'') + today.getMinutes()}`
  return (
    <div className='container-fluid mt-5'>
      <div className="row-fluid">
      <div className="locate col-12 text-center "><i className="bi bi-geo-alt-fill"></i> {cityName}</div>
      <div className="date col-12 text-center ">{date}</div>
      </div>
    </div>
    );
};

export default Header;
