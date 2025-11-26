import React from 'react';
import SriLankaFlag from '../assets/download.png';
import Background from '../assets/Back.jpg';

function HomePage() {
  return (
    <>
    <div
      className="p-6 min-h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className=" relative z-10 max-w-6xl text-center text-white">
        <h1 className="text-3xl font-bold mb-6">Welcome to Sri Lanka</h1>

        <div className="h-75 flex flex-col md:flex-row items-center gap-6 bg-white/70 p-6 rounded-lg shadow-lg">
          {/* Image */}
          <img
            src={SriLankaFlag}
            alt="Sri Lanka Flag"
            className="w-64 h-auto rounded-lg shadow-md"
          />

          {/* Text */}
          <p className="text-gray-800 leading-relaxed text-justify">
            <b>Sri Lanka</b> is a diverse island nation in the Indian Ocean, known for its
            beautiful scenery, including golden beaches, lush tea plantations, and
            mountainous interiors, earning it the nickname "Pearl of the Indian Ocean".
            With a history dating back millennia, the country is home to various ethnic
            groups, predominantly the Sinhalese and Tamils, and a rich cultural tapestry
            shaped by Buddhism and Hinduism. Its strategic location has made it a
            significant trading hub, and its economy has grown to become market-oriented,
            despite its dependence on agriculture for many rural inhabitants.
          </p>
        </div>
      </div>
    </div>
    
  
    </>
  );
}

export default HomePage;
