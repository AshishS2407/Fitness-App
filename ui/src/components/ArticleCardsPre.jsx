import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'
//import articles from '../articles.json'


const ArticleCardsPre = ({ isHome = false, isLight = false, IsLig = false }) => {
  const [articles, setArticles] = useState([])
   const [loading, setLoading] = useState(true)
  const articleeList = IsLig ? articles.slice(18,24) : articles.slice(12,18);


useEffect(()=> {
  const fetchArticles = async() => {
    
    try{
    const res = await fetch("http://localhost:5000/articles")
    const data = await res.json()
    setArticles(data)
      
    }catch(error){
      console.log(error)

    }finally {
      setLoading(false)

    }

  };
  fetchArticles();
}, [])



  console.log(articles)
  

return (
  <>

  <div className='bg-black'>
      <h1 className='font-bold text-2xl md:text-4xl text-white text-center' >All Articles </h1>
      {loading? <h1>Loading</h1>:<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
          {articleeList.map((article) => (<ArticleCard key={article.articleId} article={article} />))}, 




      </div>}
      </div>
  </>
)
}

export default ArticleCardsPre