import React, { useState } from 'react';
import axios from 'axios';
import { getUserType } from '../pages/LoginPage';
import { Link } from 'react-router-dom';
import VideoUpload from '../components/VideoUpload';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false); // State to control visibility of messages

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('There was an error fetching the messages!', error);
    }
  };

  const handleViewMessagesClick = () => {
    if (!showMessages) {
      fetchMessages(); // Fetch messages only when the button is clicked
    }
    setShowMessages(!showMessages); // Toggle the visibility of messages
  };

  const userType = getUserType();

  return (
    <>
      <div className="container mx-auto my-10 p-5">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Admin Dashboard</h1>

        <div className="flex justify-center space-x-4 mb-8">
          {/* Button to toggle visibility of messages */}
          <button
            onClick={handleViewMessagesClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            {showMessages ? "Hide Messages" : "View Messages"}
          </button>
          <Link
            to="/addarticle"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Add Article
          </Link>
          <Link
            to="/adddietplan"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Add Diet Plan
          </Link>
        </div>

        <div className="mb-10">
          <VideoUpload />
        </div>

        {showMessages && (
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-3 px-6 text-left font-semibold">Email</th>
                  <th className="py-3 px-6 text-left font-semibold">Mobile Number</th>
                  <th className="py-3 px-6 text-left font-semibold">Message</th>
                  <th className="py-3 px-6 text-left font-semibold">Sent At</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message._id} className="hover:bg-gray-100">
                    <td className="py-3 px-6 border-b text-gray-700">{message.email}</td>
                    <td className="py-3 px-6 border-b text-gray-700">{message.mobileNumber}</td>
                    <td className="py-3 px-6 border-b text-gray-700">{message.message}</td>
                    <td className="py-3 px-6 border-b text-gray-700">{new Date(message.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
