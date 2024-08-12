import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VideoUpload = () => {
    const [video, setVideo] = useState(null);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('light weight gain');

    const navigate = useNavigate();

    const handleVideoChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleUpload = async () => {
        if (!video || !name || !category) {
            alert('Please select a video, enter a name, and choose a category.');
            return;
        }

        const formData = new FormData();
        formData.append('video', video);
        formData.append('name', name);
        formData.append('category', category); // Ensure category is included

        try {
            const response = await axios.post('http://localhost:5000/workout/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Video uploaded successfully:', response.data);
            setVideo(null);
            setName('');
            setCategory('');
            navigate('/premium/workout');
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Upload Workout Video</h2>
            
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Video Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter video name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Category</option>
                    <option value="light weight gain">Light Weight Gain</option>
                    <option value="light weight loss">Light Weight Loss</option>
                    <option value="medium weight gain">Medium Weight Gain</option>
                    <option value="medium weight loss">Medium Weight Loss</option>
                    <option value="heavy weight loss">Heavy Weight Loss</option>
                </select>
            </div>
            
            <div className="mb-4">
                <label htmlFor="video" className="block text-gray-700 font-medium mb-2">Choose Video File</label>
                <input
                    type="file"
                    id="video"
                    accept="video/*"
                    onChange={handleVideoChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            <button
                onClick={handleUpload}
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Upload Video
            </button>
        </div>
    );
};

export default VideoUpload;
