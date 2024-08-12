import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

const ArticleCardsM = ({ isHome = false, showType = 'gain', userType = 'user' }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch articles from the backend
        const res = await fetch("http://localhost:5000/getmwarticles");
        const data = await res.json();
        // Choose which type of articles to display based on `showType`
        setArticles(showType === 'gain' ? data.gain : data.loss);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [showType]);

  console.log(articles);

  // Determine the number of articles to display based on the user type
  const visibleArticles = userType === 'user' ? articles.slice(0, 3) : articles;

  return (
    <div className='bg-black p-10'>
      <h1 className='font-bold text-2xl md:text-4xl text-white text-center'>
    All Articles
      </h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-20'>
          {visibleArticles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      )}
      {/* Conditionally render "View More" button only for non-premium users */}
      {userType === 'user' && (
        <div className="bg-gradient-to-r from-green-500 to--500 w-[200px] h-16 rounded-md mx-auto p-4 mt-20 mb-44">
          <a href="/getpremium" className="ml-8 text-xl font-bold text-white">View More</a>
        </div>
      )}
    </div>
  );
}

export default ArticleCardsM;
