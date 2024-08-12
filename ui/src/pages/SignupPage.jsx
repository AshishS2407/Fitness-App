import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  // signup
  const signupSubmit = async (userDetails) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    if (res.ok) {
      toast.success(`Signup success`);
      return navigate("/login");
    } else {
      toast.error(`Please check the input data`);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userDetails = {
      userName,
      password,
      email,
      weight,
      userType: "user", // Set userType to "user"
    };

    signupSubmit(userDetails);
  };

  return (
    <>
      <div className="relative min-h-screen bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/037/234/572/non_2x/ai-generated-exercise-machines-in-a-gym-free-photo.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 backdrop-blur-sm">
            <div className="flex items-center h-screen ">
              <div className="ml-60 text-white">
                <h1 className="ml-20 text-5xl text-white hover:text-blue-500">Feel Your Best.</h1>
                <h1 className="ml-20 text-5xl mt-4 text-white hover:text-blue-500">Body and Mind.</h1>
                <br />
                <p className="ml-20 mt-4 text-xl font-medium text-white hover:text-blue-500">Explore a vast selection of workouts, </p>
                <p className="ml-20 mt-1 text-xl font-medium text-white hover:text-blue-500">nutritious recipes, soothing meditations,</p>
                <p className="ml-20 mt-1 text-xl font-medium text-white hover:text-blue-500">and expert advice for a comprehensive approach</p>
                <p className="ml-20 mt-1 text-xl font-medium text-white hover:text-blue-500">to enhancing your well-being.</p>
                <br />
                <br />
                <a href="/aboutus" className="border rounded-lg p-2 bg-white hover:bg-cyan-100 m-6 shadow-xl text-blue-500 ml-20 font-semibold">About</a>
              </div>
              <div className="bg-white p-10 rounded-lg shadow-lg max-w-sm w-full ml-96">
                <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Sign Up</h2>
                <form onSubmit={submitForm}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">Weight:</label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
                  </div>
                  <p className="text-center">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
