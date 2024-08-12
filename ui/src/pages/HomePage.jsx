// src/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="relative min-h-screen bg-gray-100">
        {/* Background Image and Blue Tint */}
        <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/037/234/572/non_2x/ai-generated-exercise-machines-in-a-gym-free-photo.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 backdrop-blur-sm"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 font-sans text-center py-20">
          <header className="text-white py-20">
            <h1 className="text-4xl font-bold mt-40">Fitness Hub</h1>
            <p className="text-xl mt-4">Your ultimate destination for a healthy and fit lifestyle.</p>
            <div className="mt-8">
              <button
                className="bg-white text-blue-500 border border-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
                onClick={() => window.location.href = '/signup'}
              >
                Sign Up Now
              </button>
              <button
                className="bg-white text-blue-500 border border-blue-500 px-6 py-3 rounded-lg font-semibold ml-4 hover:bg-blue-100 transition"
                onClick={() => window.location.href = '/login'}
              >
                Log In Now
              </button>
            </div>
          </header>
          <section className="flex flex-wrap justify-center p-8">
            <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80 transform transition-transform hover:scale-105">
              <h2 className="text-blue-500 text-2xl font-semibold">Workouts</h2>
              <p className="text-gray-700 mt-2">Explore various workout plans tailored to your needs.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80 transform transition-transform hover:scale-105">
              <h2 className="text-blue-500 text-2xl font-semibold">Diet Plans</h2>
              <p className="text-gray-700 mt-2">Get personalized diet plans to complement your workouts.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80 transform transition-transform hover:scale-105">
              <h2 className="text-blue-500 text-2xl font-semibold">Articles</h2>
              <p className="text-gray-700 mt-2">Read the latest articles on fitness and health.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg m-4 p-6 w-80 transform transition-transform hover:scale-105">
              <h2 className="text-blue-500 text-2xl font-semibold">Premium Membership</h2>
              <p className="text-gray-700 mt-2">Unlock exclusive content and features with a premium membership.</p>
            </div>
          </section>
        </div>
      </div>

    </>
  );
};

export default HomePage;
