import React from 'react'
import Anuradapura from '../assets/anuradhapura.jpg'
import ArugamBay from '../assets/Arugam Bay.jpg'
import Benthota from '../assets/bentota-beach.jpg'
import Placemaker from '../components/Placemaker'
import kandy from '../assets/kandy.jpg'

export default function Places() {
  
  return (
    <>
      <div className="p-6 relative z-10 max-w-8x1 text-center bg-blue-900">
         
        <Placemaker 
            place = "Anuradapura"  
            image = {Anuradapura} >
              <p>
                Anuradhapura is an ancient, sacred city in Sri Lanka, a UNESCO World Heritage Site, and the capital of the country's North Central Province. As the royal capital for nearly 1,500 years, it was a flourishing center of political power, trade, religion, and culture, and is considered the cradle of Buddhism in Sri Lanka. The ruins of this vast civilization are a testament to the advanced engineering and religious devotion of the Sinhalese kingdoms
              </p>
        </Placemaker>
        
        
       <div className="flex justify-end">
        <Placemaker 
          place = "ArugamBay" 
          image = {ArugamBay}>
            <p>
              Arugam Bay is a bay situated on the Indian Ocean in the dry zone of Sri Lanka's southeast coast. The bay is located 320 km due east of Colombo. It is a popular surfing and tourist destination. Due to its popularity among low budget tourists, the area has managed a slow recovery. By private initiatives only. The main road through town has still not been repaved. Work is in progress to improve road access to the area. But in Arugam Bay itself, little has changed. As late as May, 2009 no help has been received from any official source or international organizations. 
            </p>
        </Placemaker>
        </div> 

  
        <Placemaker 
          place = "Benthota" 
          image = {Benthota}>
            <p>
              A Sri Lankan coastal city famous for golden beaches, Bentota is situated on the southern coastal tip of the Galle District of the Southern Province . The town is a popular tourist attraction. It is especially famous among the foreign tourists. The name comes from a mythical story which dates back to kings time saying a demon called Bem ruled this river ( tota = river bank. Bentota hosts a handful of world proclaimed hotels. It is the hosting land for the famous Sri Lankan Jeweler Aida. Bentota also delivers an ancient art of healing called Ayurveda .
            </p>
        </Placemaker>

        <div className="flex justify-end">
        <Placemaker 
          place = "kandy" 
          image = {kandy}>
            <p>
              Kandy is Sri Lanka's cultural capital, a UNESCO World Heritage site, and the last capital of the ancient Sinhalese kings. Nestled among the central highlands and surrounded by lush tea plantations, the city is a major center for Buddhism and a hub for Sri Lankan arts and culture.
            </p>
        </Placemaker>
        </div> 
        

      </div>
    
    </>
    

          

    
  )
}
