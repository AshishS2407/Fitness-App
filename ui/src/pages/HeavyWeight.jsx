import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeavyWeight = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const workoutBtn = document.getElementById('workoutBtn');
      const dietBtn = document.getElementById('dietBtn');
      const articlesBtn = document.getElementById('articlesBtn');
  
      const handleWorkoutClick = () => navigate('/workouts/heavy-weight-loss');
      const handleDietClick = () => navigate('/heavylossdietplans');
      const handleArticlesClick = () => navigate('/heavylossarticles');
  
      workoutBtn.addEventListener('click', handleWorkoutClick);
      dietBtn.addEventListener('click', handleDietClick);
      articlesBtn.addEventListener('click', handleArticlesClick);
  
      // Cleanup function to remove the event listeners when the component unmounts
      return () => {
        workoutBtn.removeEventListener('click', handleWorkoutClick);
        dietBtn.removeEventListener('click', handleDietClick);
        articlesBtn.removeEventListener('click', handleArticlesClick);
      };
    }, [navigate]);
  return (
    <>


    <div className="relative min-h-screen bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/037/234/572/non_2x/ai-generated-exercise-machines-in-a-gym-free-photo.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 backdrop-blur-sm">        

        <div class="flex justify-between p-40">
            <div class="w-[400px] h-[600px] rounded-md shadow-xl shadow-grey-100 bg-gradient-to-r from-green-400 to-blue-500">
                <div class="mt-40">
                    <h1 class="text-5xl text-white font-semibold text-center">WORKOUT VIDEOS</h1>
                    <br/><br/><br/>
                    <button id="workoutBtn" class="bg-white hover:bg-cyan-100 border rounded-md p-2 shadow-xl text-blue-500 font-semibold ml-40">View More</button>
                </div>
            </div>

            <div class="w-[400px] h-[600px] rounded-md shadow-xl shadow-grey-100 bg-gradient-to-r from-green-400 to-blue-500">
                <div class="mt-44">
                    <h1 class="text-5xl text-white font-semibold text-center">DIET PLANS</h1>
                    <br/><br/><br/>
                    <button id="dietBtn" class="bg-white hover:bg-cyan-100 border rounded-md p-2 shadow-xl text-blue-500 font-semibold ml-40 mt-8">View More</button>
                </div>
            </div>

            <div class="w-[400px] h-[600px] rounded-md shadow-xl shadow-grey-100 bg-gradient-to-r from-green-400 to-blue-500">
                <div class="mt-44">
                    <h1 class="text-5xl text-white font-semibold text-center">ARTICLES</h1>
                    <br/><br/><br/>
                    <button id="articlesBtn" class="bg-white hover:bg-cyan-100 border rounded-md p-2 shadow-xl text-blue-500 font-semibold ml-40 mt-8">View More</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
    
    </>
  );
};

export default HeavyWeight;
