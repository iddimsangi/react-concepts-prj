import React from 'react'
import './carCard.css'
// import car_profile from '../../../Assets/car.jpg';
function CardCar(props) {
  const{ carName, engNo} = props.myCarObj;
    return (
        <div className="card">
          <p>{carName}</p>
          <p>{engNo}</p>
        </div>
    )
}

export default CardCar
