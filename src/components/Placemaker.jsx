import React from 'react'
import Anuradapura from '../assets/anuradhapura.jpg'
import ArugamBay from '../assets/Arugam Bay.jpg'
import Benthota from '../assets/bentota-beach.jpg'

export default function Placemaker(props) {
  return (
    <>
    <div className="p-6 relative z-10 max-w-6x1 text-center text-white">
              <h1 className="text-4xl text-left font-bold mb-6">{props.place}</h1>
                <div className="h-50 w-250 flex flex-col md:flex-row items-center gap-6 bg-amber-400 p-6 rounded-lg shadow-lg">              
                  <img
                    src={props.image}
                    alt={props.place}
                    className="w-64 h-auto rounded-lg shadow-md"
                  />
                  <p className="text-gray-800 leading-relaxed text-justify">
                   {props.children}
                  </p>
                </div>
            </div>  
    
      
    </>
  )
}
