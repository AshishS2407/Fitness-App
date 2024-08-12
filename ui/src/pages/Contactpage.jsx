import React, { useState } from 'react';
import axios from 'axios';

const Contactpage = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/messages', {
        email,
        mobileNumber,
        message,
      });
      console.log('Message sent:', response.data);
      // Clear the form after submission
      setEmail('');
      setMobileNumber('');
      setMessage('');
      // Display a success message
      alert('Message has been sent successfully');
    } catch (error) {
      console.error('There was an error sending the message!', error);
    }
  };

  return (
    <>
      <div>
        <div className="h-[600px] w-[1500px] bg-gradient-to-r from-cyan-500 to-blue-500 mt-40 rounded-lg mx-auto p-10 mb-20">
          <div>
            <ul className="font-semibold text-base text-slate-700 ml-20 text-white">
              <h1 className="text-5xl">Leave a Message</h1>
              <br />
              <br />
              <li>Enter Email:</li>
              <li>
                <input
                  type="text"
                  placeholder="   Enter Email"
                  className="w-[900px] h-10 border rounded-md outline-none focus:ring ring-gray-200 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <br />
              <li>Enter Mobile Number</li>
              <li>
                <input
                  type="text"
                  placeholder="   Enter Mobile Number"
                  className="w-[900px] h-10 border rounded-md outline-none focus:ring ring-gray-200 text-black"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </li>
              <br />
              <li>Leave a Message</li>
              <textarea
                name="text"
                className="py-1 rounded-md outline-none focus:ring ring-gray-200 w-[900px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <br />
              <br />
              <li>
                <button
                  onClick={handleSubmit}
                  className="border rounded-lg p-2 bg-white hover:bg-cyan-100 shadow-xl text-blue-500 text-black"
                >
                  Send Message
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
