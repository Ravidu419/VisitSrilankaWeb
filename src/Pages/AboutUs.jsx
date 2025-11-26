import React from 'react'
import Background from '../assets/sigiriya.jpg';

export default function AboutUs() {
  return (
    <div>
      <div
            className="p-6 min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
            style={{ backgroundImage: `url(${Background})` }}
          >
           <div className="absolute inset-0 bg-black/50"></div>


          </div>
    </div>
  )
}
