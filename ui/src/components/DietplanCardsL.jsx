import React, { useEffect, useState } from 'react';
import DietplanCard from './DietplanCard';

const DietplanCardsL = ({ isHome = false, showType = 'gain', userType = 'user' }) => {
  const [dietplans, setDietplans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDietplans = async () => {
      try {
        // Fetch diet plans from the backend
        const res = await fetch("http://localhost:5000/getlwdietplans");
        const data = await res.json();
        // Choose which type of diet plans to display based on `showType`
        setDietplans(showType === 'gain' ? data.gain : data.loss);
      } catch (error) {
        console.error("Failed to fetch diet plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDietplans();
  }, [showType]);

  console.log(dietplans);

  // Determine the number of diet plans to display based on the user type
  const visibleDietplans = userType === 'user' ? dietplans.slice(0, 3) : dietplans;

  return (
    <div className='bg-black p-10'>
      <h1 className='font-bold text-2xl md:text-4xl text-white text-center'> 
        All Diet Plans
      </h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 mt-20'>
          {visibleDietplans.map((dietplan) => (
            <DietplanCard key={dietplan._id} dietplan={dietplan} />
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

export default DietplanCardsL;
