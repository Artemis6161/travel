import React from 'react'
import "./trip.css"
export default function tripdata(props) {
  return (
    <div className='t-card'>
    <div className='t-image'>
   <img src={props.img1} alt="img" />
    </div>
     <h4>{props.heading}</h4>
     <p>{props.text}</p>
    </div>
  )
}
