import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import Cookies from 'js-cookie';

const EditDietplanPage = () => {

  const dietplan = useLoaderData()

    const [title, setTitle] = useState(dietplan.title)
    const [dietplanId, setdietplanId] = useState(dietplan.dietplanId)
    const [plan, setPlan] = useState(dietplan.plan)
    const [createdBy, setCreatedBy] = useState(dietplan.createdBy)
    const [content, setContent] = useState(dietplan.content)
    const [category, setCategory] = useState(dietplan.category)  // Add state for category

    const navigate = useNavigate()
  
    const submitForm =  (e) => {
      e.preventDefault()

      const token=Cookies.get('Authtoken');
      if(!token){
        navigate('/');
        return;
      }

      const decodetoken = jwtDecode(token);
      const weight=decodetoken.weight;
      console.log(`weight ${weight}`);
      
      const updatedDietplan = {
        title, dietplanId , plan , createdBy, content, category
      };
  
      const res = updateDietplan(updatedDietplan)
      if (category === 'light weight gain') {
        console.log(`Category: ${category}`);
        navigate('/premium/lightweight-gain-dietplans');
      } else if (category === 'light weight loss') {
        navigate('/premium/lightweight-loss-dietplans');
      } else if (category === 'medium weight gain') {
        navigate('/premium/mediumweight-gain-dietplans');
      } else if (category === 'medium weight loss') {
        navigate('/premium/mediumweight-loss-dietplans');
      } else if (category === 'heavy weight loss') {
        navigate('/pemium/heavyweight-loss-dietplans');
      } else {
        navigate('/login');
      }
      
      console.log(res)
      
    }
  
    const updateDietplan = async (updatedDietplan) => {
      const res = await fetch(`/api/dietplans/${dietplanId}`, {
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(updatedDietplan)
      })
      return res;
    }







  return ( 
    <section className="bg-white mb-20">
    <div className="container m-auto max-w-2xl py-2">
      <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        
        <form onSubmit={submitForm}> 
          <h2 className="text-3xl text-blue-600 text-center font-semibold mb-6">
            Edit Dietplan
          </h2>

          <div className="mb-4">
            <label className="block text-black font-bold mb-2">
              Dietplan Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. Certified Blockchain Associate"
              required
              value={title}
              onChange={(e) => setTitle (e.target.value)}
              
            />
          </div>

          <div className="mb-4">
            <label className="block text-black font-bold mb-2">
              Dietplan Id
            </label>
            <input
              type="text"
              id="dietplanId"
              name="dietplanId"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg. 1"
              required
              value={dietplanId}
              onChange={(e) => setdietplanId (e.target.value)}
              
            />
          </div>


          <div className="mb-4">
            <label
              htmlFor="plan"
              className="block text-black font-bold mb-2"
            >
              Plan
            </label>
            <input
              id="plan"
              name="plan"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Small createdBy on the Dietplan"
              value={plan}
              onChange={(e) => setPlan (e.target.value)}
            
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="createdBy"
              className="block text-black font-bold mb-2"
            >
              createdBy
            </label>
            <input
              id="createdBy"
              name="createdBy"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Small createdBy on the Dietplan"
              value={createdBy}
              onChange={(e) => setCreatedBy (e.target.value)}
            
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="createdBy"
              className="block text-black font-bold mb-2"
            >
                Content
            </label>
            <textarea
              id="content"
              name="content"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Small createdBy on the Dietplan"
              value={content}
              onChange={(e) => setContent (e.target.value)}
            
            ></textarea>
          </div>

          <div className="mb-4">
              <label htmlFor="category" className="block text-black font-bold mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="border rounded w-full py-2 px-3"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="light weight gain">Light Weight Gain</option>
                <option value="light weight loss">Light Weight Loss</option>
                <option value="medium weight gain">Medium Weight Gain</option>
                <option value="medium weight loss">Medium Weight Loss</option>
                <option value="heavy weight loss">Heavy Weight Loss</option>
              </select>
            </div>
    
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 my-10 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Course
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

  )
}

export default EditDietplanPage