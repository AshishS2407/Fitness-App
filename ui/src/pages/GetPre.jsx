import React from "react";
import { useNavigate } from "react-router-dom";

const GetPre = () => {
  const navigate = useNavigate();

  const handlePlanSelection = async (plan) => {
    const newUserType = "premium";

    try {
      const response = await fetch("/api/update-user-type", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newUserType }),
        credentials: 'include', // Ensure cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      alert(`You have selected the ${plan} plan.`);
      navigate("/login");
    } catch (error) {
      console.error("Error updating user type:", error);
      alert("An error occurred while updating the user type. Please try again.");
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-gray-100">
        <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/037/234/572/non_2x/ai-generated-exercise-machines-in-a-gym-free-photo.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center p-8 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-40">Premium Subscription Plans</h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
                <div className="bg-white h-96 w-60 p-4 rounded-lg shadow-lg text-center">
                  <h2 className="text-2xl font-bold mb-4 mt-20">Daily Plan</h2>
                  <p className="text-gray-700 mb-4">Get access for one day</p>
                  <p className="text-gray-700 font-bold mb-6">$5</p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handlePlanSelection("Daily")}
                  >
                    Choose Daily Plan
                  </button>
                </div>
                <div className="bg-white h-96 w-60 p-4 rounded-lg shadow-lg text-center">
                  <h2 className="text-2xl font-bold mb-4 mt-20">Monthly Plan</h2>
                  <p className="text-gray-700 mb-4">Get access for one month</p>
                  <p className="text-gray-700 font-bold mb-6">$30</p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handlePlanSelection("Monthly")}
                  >
                    Choose Monthly Plan
                  </button>
                </div>
                <div className="bg-white h-96 w-60 p-4 rounded-lg shadow-lg text-center">
                  <h2 className="text-2xl font-bold mb-4 mt-20">Yearly Plan</h2>
                  <p className="text-gray-700 mb-4">Get access for one year</p>
                  <p className="text-gray-700 font-bold mb-6">$300</p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handlePlanSelection("Yearly")}
                  >
                    Choose Yearly Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPre;
