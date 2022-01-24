import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
const Header = ({cityName, date}) => {

  return (
    <div className='container-fluid pt-5'>
      <div className="row-fluid">
      <div className="locate col-12 text-center "><i className="bi bi-geo-alt-fill"></i> {cityName}</div>
      <div className="date col-12 text-center ">{date}</div>
      </div>
    </div>
    );
};

export default Header;
