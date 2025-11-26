import React from 'react'


export default function Navbar() {
  return (
    <div>
       <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md z-50">
      <div className="text-xl font-bold">
        #VisitSrilanka
      </div>
      <ul className="flex space-x-6">
        <li><a href = "#Home.jsx"className="hover:text-blue-200 cursor-pointer">Home</a></li>
        <li><a href = "#Places"className="hover:text-blue-200 cursor-pointer">Places</a></li>
        <li><a href = "#Donate"className="hover:text-blue-200 cursor-pointer">Donate</a></li>
        <li><a href = "#About Us"className="hover:text-blue-200 cursor-pointer">About Us</a></li>

      </ul>
    </nav>
      
    </div>
  )
}
