// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">Fitness Hub</h1>
            <p className="text-gray-400">Destination for a healthy and fit lifestyle.</p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Features</h2>
            <ul>
              <li className="mb-2"><a href="features.html" className="hover:text-blue-400">Features</a></li>
              <li className="mb-2"><a href="workout.html" className="hover:text-blue-400">Workout Videos</a></li>
              <li className="mb-2"><a href="diet.html" className="hover:text-blue-400">Diet Plans</a></li>
              <li><a href="articles.html" className="hover:text-blue-400">Articles</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Account</h2>
            <ul>
              <li className="mb-2"><a href="signup.html" className="hover:text-blue-400">Sign Up</a></li>
              <li className="mb-2"><a href="login.html" className="hover:text-blue-400">Log In</a></li>
              <li><a href="premium.html" className="hover:text-blue-400">Premium</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul>
              <li className="mb-2"><a href="tel:8606179622" className="hover:text-blue-400">Phone: 860-617-9622</a></li>
              <li><a href="mailto:fitnesshub@gmail.com" className="hover:text-blue-400">Email: fitnesshub@gmail.com</a></li>
            </ul>
            <h2 className="text-lg font-semibold mt-6 mb-4">Socials</h2>
            <ul>
              <li className="mb-2"><a href="facebook.html" className="hover:text-blue-400">Facebook</a></li>
              <li className="mb-2"><a href="instagram.html" className="hover:text-blue-400">Instagram</a></li>
              <li><a href="twitter.html" className="hover:text-blue-400">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <footer className="bg-gray-700 text-center py-2 text-white">
        &copy; {new Date().getFullYear()} Fitness Hub. All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
