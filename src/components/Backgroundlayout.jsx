import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/index.jsx'
import clear from "../assets/images/Clear.jpg"
import cloudy from "../assets/images/Cloudy.jpg"
import fog from "../assets/images/fog.png"
import rainy  from "../assets/images/Rainy.jpg"
import snow  from "../assets/images/snow.jpg"
import stormy  from "../assets/images/Stormy.jpg"
import sunny  from "../assets/images/Sunny.jpg"

const Backgroundlayout = () => {
  
  const {weather} = useStateContext()
  const [image,setImage] = useState(clear)

  useEffect(()=>{
    if(weather.conditions){
      let imageString = weather.conditions
      if(imageString.toLowerCase().includes("clear")){
        setImage(clear)
      }
      else if(imageString.toLowerCase().includes("cloud")){
        setImage(cloudy)
      }
      else if(imageString.toLowerCase().includes("fog")){
        setImage(fog)
      }
      else if(imageString.toLowerCase().includes("rain") || imageString.toLowerCase().includes("shower")){
        setImage(rainy)
      }
      else if(imageString.toLowerCase().includes("snow")){
        setImage(snow)
      }
      else if(imageString.toLowerCase().includes("thunder") || imageString.toLowerCase().includes("storm")){
        setImage(stormy)
      }
      else if(imageString.toLowerCase().includes("sunny")){
        setImage(sunny)
      }
    }
  },[weather])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default Backgroundlayout


