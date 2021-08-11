import React from 'react'
import CardCar from './carCard/CardCar'
function CarList(props) {
    const carList = props.carsArray.map(carObj =>{
        return <CardCar myCarObj={carObj} />
    })
    return (
        <div style={{width:'40%', margin:'0 auto'}}>
            <h1 style={{textTransform:'uppercase'}}>hey this is car list content</h1>
            {carList}
        </div>
    )
}

export default CarList
