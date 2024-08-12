import React, { useState } from "react";
import {jwtDecode} from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      email,
      password,
    };

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });
    console.log(res, "login res from /login");
    if (res.ok) {
      const data = await res.json();
      const userType = data.userType;
      const weight = data.weight;
      console.log(weight);
      toast.success(`Logged in as : ${userType}`);

      // Redirect based on userType and weight
      if (userType === 'premium' || userType === 'admin') {
        if (weight < 60) {
          return navigate("/premium/lightweight");
        } else if (weight >= 60 && weight < 90) {
          return navigate("/premium/mediumweight");
        } else {
          return navigate("/premium/heavyweight");
        }
      } else if (userType === 'user') {
        if (weight < 60) {
          return navigate("/lightweight");
        } else if (weight >= 60 && weight < 90) {
          return navigate("/mediumweight");
        } else {
          return navigate("/heavyweight");
        }
      }
    } else {
      toast.error(`Please check your credentials`);
      return navigate("/login");
    }
  };

  return (
    <>
    <div className="relative min-h-screen bg-gray-100">
    <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/037/234/572/non_2x/ai-generated-exercise-machines-in-a-gym-free-photo.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-blue-900 bg-opacity-30 backdrop-blur-sm">
              <div className="flex items-center h-screen">
        <div className="ml-60 text-5xl font-semibold">
          <h1 className="ml-10 mt-40 text-white hover:text-blue-500">"The only bad workout is</h1>
          <h1 className="text-white hover:text-blue-500">the one that didn't happen."</h1>
        </div>
        <div className="ml-60 mt-20 bg-white p-10 rounded-lg shadow-lg h-[500px] w-[400px]">
          <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">Login</h2>
          <form onSubmit={loginSubmit}>
            <div className="mb-4 mt-12">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6 mt-12">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-8">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
            </div>
            <p className="text-center mt-12">
              Don't have an account? <Link to="/signup" className="text-blue-700 hover:underline ">Sign Up</Link>
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

const getUserType = () => {
  const authToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("Authtoken"))
    ?.split("=")[1];
  console.log("document.cookie value", authToken);

  if (authToken) {
    const decoded = jwtDecode(authToken);
    console.log("decoded", decoded);
    const userType = decoded.userType;
    console.log("usertype", userType);
    return userType;
  }
  return null;
};

export { LoginPage as default, getUserType };
