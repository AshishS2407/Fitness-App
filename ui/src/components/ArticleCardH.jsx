import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

const ArticleCardsH = ({ isHome = false, userType = 'user' }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Fetch articles from the backend
        const res = await fetch("http://localhost:5000/gethwarticles");
        const data = await res.json();
        // Set the articles for heavy weight loss
        setArticles(data.heavyWeightLossArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  console.log(articles);

  // Determine the number of articles to display based on the user type
  const visibleArticles = userType === 'user' ? articles.slice(0, 3) : articles;

  return (
    <div className='bg-black'>
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

export default ArticleCardsH;
