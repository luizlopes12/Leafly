import React from 'react';

const Today = ({weather}) => {
  console.log(weather)
  return (
    <div>
        {weather.weather.map((item)=><div>{item.main}</div>)}
    </div>
);
};

export default Today;
