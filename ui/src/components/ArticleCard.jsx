import React, { useState } from 'react'
import thumbnail from "../assets/images/r.png"
import { Link } from 'react-router-dom'


const ArticleCard = ({article}) => {

  const [showFullDescription, SetShowFullDescription] = useState(false)
  var description = article.description 
  

  if (!showFullDescription) {
    description = description.substring(0,80)
  }

  const set = showFullDescription ? 'Less' : 'More'
  
  
  return (

    <> 
            <div className=' bg-gradient-to-r from-blue-800 to-gray-900 rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 h-96 w-[500px] transform transition-transform hover:scale-105'>
            <h2 className=' font-bold text-lg text-white '>{article.title}</h2>
            <img src={thumbnail} alt="course thumbnail" className='w-80 h-52 ' />

            {/* <p className='text-black group-hover:text-white my-2 mx-5'>{description} </p> */}
            {/* <button className="flex flex-col w-full px-5 py-2 text-purple-500 hover:text-purple-600" onClick={()=> SetShowFullDescription(!showFullDescription)}>
              {set}

            </button> */}
            <Link 
            to={`/articles/${article.articleId}`} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 self-start mx-auto">Learn More</Link>
        </div>

    
    </>
  )
}

export default ArticleCard