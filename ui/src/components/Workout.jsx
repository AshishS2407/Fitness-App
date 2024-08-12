import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoUpload from './VideoUpload';

const Workout = ({ userType }) => {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/workouts?category=${selectedCategory}`);
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, [selectedCategory]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const displayedVideos = userType === 'user' ? videos.slice(0, 3) : videos;

    return (
        <>
            <div className="bg-black">
                <div className="ml-[695px] font-bold text-white text-5xl p-12">
                    <h1>WORKOUT VIDEOS</h1>
                </div>
                <div className="p-4">
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">All Categories</option>
                        <option value="light weight gain">Light Weight Gain</option>
                        <option value="light weight loss">Light Weight Loss</option>
                        <option value="medium weight gain">Medium Weight Gain</option>
                        <option value="medium weight loss">Medium Weight Loss</option>
                        <option value="heavy weight loss">Heavy Weight Loss</option>
                    </select>
                </div>
                {userType === 'admin' && <VideoUpload />}
                <div className="flex flex-wrap text-white font-bold text-xl">
                    {displayedVideos.map((video) => (
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
                <div className="p-10"></div>
            </div>
        </>
    );
};

export default Workout;
