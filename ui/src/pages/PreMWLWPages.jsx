import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MediumWeightLossPage = ({ userType }) => { // Accept userType as a prop
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideosByCategory = async () => {
            try {
                const response = await axios.get('http://localhost:5000/workouts?category=medium weight loss');
                const filteredVideos = response.data;
                
                // Limit the number of videos displayed for normal users
                const displayedVideos = userType === 'user' ? filteredVideos.slice(0, 3) : filteredVideos;

                setVideos(displayedVideos);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideosByCategory();
    }, [userType]); // Include userType in the dependency array

    return (
        <>
            <div className="bg-black">
                <div className= "font-bold text-white text-5xl p-12">
                    <h1 className='text-center'>Workout Videos</h1>
                </div>
                <div className="flex flex-wrap text-white font-bold text-xl">
                    {videos.map((video) => (
                        <div key={video._id} className="p-20">
                            <video width="450" height="255" controls>
                                <source src={video.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <h1 className="text-center mt-4">{video.name}</h1>
                        </div>
                    ))}
                </div>

                {userType === 'user' && (
                    <div className="bg-gradient-to-r from-green-500 to--500 w-[200px] h-16 rounded-md mx-auto p-4 mt-20 mb-44">
                        <a href="/getpremium" className="ml-8 text-xl font-bold text-white">View More</a>
                    </div>
                )}
            </div>
            <div className='p-20'></div>

        </>
    );
};

export default MediumWeightLossPage;
