import React from 'react'

function Condition() {
    
  return (
    <div>
        <ParkingList name="BMW" isParked={true}/>
        <ParkingList name="Audi" isParked={true}/>
        <ParkingList name="Maruti" isParked={false}/>
        <ParkingList name="Tata" isParked={true}/>

    </div>
  )
}

export default Condition

function ParkingList({name,isParked}){
    let carDetails=" ";
    if(isParked){
        carDetails="Parked";
        
    }else{
        carDetails="Not Parked";
    }
    return(
        <div>
            
            <h1 style={{color:isParked?"green":"red"}}>{name} : {carDetails} </h1>
        </div>
    )
}