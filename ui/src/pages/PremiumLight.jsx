import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumLight = () => {

    const navigate = useNavigate();
      
        useEffect(() => {
          const gainingWeightBtn = document.getElementById('gainingWeightBtn');
          const reducingWeightBtn = document.getElementById('reducingWeightBtn');
      
          const handleGainingWeightClick = () => {
            navigate('/premium/lightweight-gain'); // Replace with the actual URL for gaining weight features
          };
      
          const handleReducingWeightClick = () => {
            navigate('/premium/lightweight-loss'); // Replace with the actual URL for reducing weight features
          };
      
          gainingWeightBtn.addEventListener('click', handleGainingWeightClick);
          reducingWeightBtn.addEventListener('click', handleReducingWeightClick);
      
          // Cleanup event listeners on component unmount
          return () => {
            gainingWeightBtn.removeEventListener('click', handleGainingWeightClick);
            reducingWeightBtn.removeEventListener('click', handleReducingWeightClick);
          };
        }, [navigate]);


  return (
 
    <>


    <div className="relative min-h-screen bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/037/234/572/non_2x/ai-generated-exercise-machines-in-a-gym-free-photo.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 backdrop-blur-sm">                
    
        

                <div class="flex justify-evenly p-40">
                    <div class="w-[400px] h-[600px] rounded-md shadow-xl shadow-grey-100 bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div class="mt-40"> <br/> <br/> <br/> 
                            <h1 class="text-5xl text-white font-semibold text-center">FOR GAINING WEIGHT</h1> <br/>
                            <img src="" alt=""/> <br/>
                            <button id="gainingWeightBtn"
                            class="bg-white hover:bg-cyan-100 border rounded-md p-2 shadow-xl text-blue-500 font-semibold ml-40">View More</button>
                        </div>
                    </div>
            
                    <div class="w-[400px] h-[600px] rounded-md shadow-xl shadow-grey-100 bg-gradient-to-r from-cyan-500 to-blue-500">
                        <div class="mt-40"> <br/> <br/> <br/> 
                            <h1 class="text-5xl text-white font-semibold text-center">FOR REDUCING WEIGHT</h1> <br/>
                            <img src="" alt=""/> <br/> 
                            <button id="reducingWeightBtn"
                                class="bg-white hover:bg-cyan-100 border rounded-md p-2 shadow-xl text-blue-500 font-semibold ml-40">View More</button>
                        </div>
                    </div>
            
            
                </div>
        
            
                </div>
                </div>
                </div>
    
    </>
  )
}

export default PremiumLight