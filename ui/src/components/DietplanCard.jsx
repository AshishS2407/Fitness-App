import React, { useState } from 'react'
import thumbnail from "../assets/images/r.png"
import { Link } from 'react-router-dom'


const DietplanCard = ({dietplan}) => {

  const [showFullPlan, SetShowFullPlan] = useState(false)
  var plan = dietplan.plan 
  

  if (!showFullPlan) {
    plan = plan.substring(0,80)
  }

  const set = showFullPlan ? 'Less' : 'More'
  
  
  return (

    <> 


            <div className=' bg-gradient-to-r from-blue-800 to-gray-900 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 h-96 w-[500px] transform transition-transform hover:scale-105'>
            <h2 className=' font-bold text-lg text-white '>{dietplan.title}</h2>
            <img src={thumbnail} alt="dietplan thumbnail" className='w-80 h-52 ' />

            

            
            <Link 
            to={`/dietplans/${dietplan.dietplanId}`} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 self-start mx-auto">Learn More</Link>
        </div>

  
    </>
  )
}

export default DietplanCard