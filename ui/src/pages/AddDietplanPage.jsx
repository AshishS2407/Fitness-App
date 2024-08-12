import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddDietplanPage = () => {
  const [title, setTitle] = useState('')
  const [dietplanId, setDietplanId] = useState('')
  const [plan, setPlan] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('light weight gain')

  const navigate = useNavigate()

  const submitForm = async (e) => {
    e.preventDefault()
    const newDietplan = {
      title,
      dietplanId,
      plan,
      createdBy,
      content,
      category
    }

    const res = await addDietplan(newDietplan)
    toast.success('Diet Plan Added Successfully')

    // Redirect based on the selected category
    if (category === 'light weight gain') {
      navigate('/premium/lightweight-gain-dietplans')
    } else if (category === 'light weight loss') {
      navigate('/premium/lightweight-loss-dietplans')
    } else if (category === 'medium weight gain') {
      navigate('/premium/mediumweight-gain-dietplans')
    } else if (category === 'medium weight loss') {
      navigate('/premium/mediumweight-loss-dietplans')
    } else if (category === 'heavy weight loss') {
      navigate('/premium/heavyweight-loss-dietplans')
    } else {
      navigate('/login')
    }

    console.log(res)
  }

  const addDietplan = async (newDietplan) => {
    const response = await fetch(`/api/dietplans`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDietplan),
    })
    const data = await response.json()
    return data
  }

  return (
    <section className="bg-gray-50 mb-20">
      <div className="container mx-auto max-w-4xl py-10">
        <div className="bg-white px-8 py-10 shadow-lg rounded-lg border">
          <form onSubmit={submitForm}>
            <h2 className="text-4xl text-blue-600 text-center font-extrabold mb-8">
              Add Diet Plan
            </h2>

            <div className="mb-6">
              <label className="block text-black font-semibold mb-2">
                Diet Plan Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border border-gray-300 rounded-lg w-full py-3 px-4 text-black focus:outline-none focus:border-purple-500"
                placeholder="e.g. Balanced Diet Plan"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-black font-semibold mb-2">
                Diet Plan Id
              </label>
              <input
                type="text"
                id="dietplanId"
                name="dietplanId"
                className="border border-gray-300 rounded-lg w-full py-3 px-4 text-black focus:outline-none focus:border-purple-500"
                placeholder="e.g. 1"
                required
                value={dietplanId}
                onChange={(e) => setDietplanId(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="plan" className="block text-black font-semibold mb-2">
                Plan
              </label>
              <input
                id="plan"
                name="plan"
                className="border border-gray-300 rounded-lg w-full py-3 px-4 text-black focus:outline-none focus:border-purple-500"
                rows="4"
                placeholder="Details of the diet plan"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
              ></input>
            </div>

            <div className="mb-6">
              <label htmlFor="createdBy" className="block text-black font-semibold mb-2">
                Created By
              </label>
              <input
                id="createdBy"
                name="createdBy"
                className="border border-gray-300 rounded-lg w-full py-3 px-4 text-black focus:outline-none focus:border-purple-500"
                rows="2"
                placeholder="Author of the diet plan"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
              ></input>
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="block text-black font-semibold mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className="border border-gray-300 rounded-lg w-full py-3 px-4 text-black focus:outline-none focus:border-purple-500"
                rows="4"
                placeholder="Content of the diet plan"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            {/* Category Dropdown */}
            <div className="mb-6">
              <label htmlFor="category" className="block text-black font-semibold mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="border border-gray-300 rounded-lg w-full py-3 px-4 text-black focus:outline-none focus:border-purple-500"
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full w-full focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
                Add Diet Plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddDietplanPage
