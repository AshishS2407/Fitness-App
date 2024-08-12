import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddArticlePage = () => {
  const [title, setTitle] = useState('')
  const [articleId, setArticleId] = useState('')
  const [description, setDescription] = useState('')
  const [createdBy, setCreatedBy] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('light weight gain')

  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    const newArticle = {
      title, 
      articleId, 
      description, 
      createdBy, 
      content,
      category
    }

    const res = addArticle(newArticle)
    toast.success('Article Added Successfully')
    
    if (category === 'light weight gain') {
      navigate('/premium/lightweight-gain-articles')
    } else if (category === 'light weight loss') {
      navigate('/premium/lightweight-loss-articles')
    } else if (category === 'medium weight gain') {
      navigate('/premium/mediumweight-gain-articles')
    } else if (category === 'medium weight loss') {
      navigate('/premium/mediumweight-loss-articles')
    } else if (category === 'heavy weight loss') {
      navigate('/premium/heavyweight-loss-articles')
    } else {
      navigate('/login')
    }

    console.log(res)
  }

  const addArticle = async (newArticle) => {
    const response = await fetch(`/api/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-lg px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={submitForm}>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Add Article
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Article Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="eg: Weightloss Article"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Article ID
              </label>
              <input
                type="text"
                id="articleId"
                name="articleId"
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="eg: 1"
                required
                value={articleId}
                onChange={(e) => setArticleId(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows="3"
                placeholder="Short description of the article"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                rows="5"
                placeholder="Full content of the article"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Created By
              </label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Author's name"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="border border-gray-300 rounded-lg w-full py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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

            <div className="mt-8">
              <button
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="submit"
              >
                Add Article
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddArticlePage
