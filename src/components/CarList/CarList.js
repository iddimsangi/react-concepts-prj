import React from 'react'
import CardCar from './carCard/CardCar'
function CarList() {
    return (
        <div style={{width:'40%', margin:'0 auto'}}>
            <h1 style={{textTransform:'uppercase'}}>hey this is car list content</h1>
            <CardCar />
            <CardCar />
        </div>
    )
}

export default CarList
