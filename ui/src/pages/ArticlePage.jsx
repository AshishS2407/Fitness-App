import React, { useEffect, useState } from 'react'
import header from '../assets/images/header.jpg'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { getUserType } from './LoginPage'
import { toast } from 'react-toastify'

const ArticlePage = () => {
  const { id } = useParams()
  const article = useLoaderData()
  const navigate = useNavigate()
  const userType = getUserType()

  const deleteArticle = async () => {
    const confirm = window.confirm("Are you sure you want to delete this article?")
    if (!confirm) return
    const res = await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
    })
    toast.success('Article deleted successfully')

    // Redirect based on category
    if (article.category === 'light weight gain') {
      navigate('/premium/lightweight-gain-articles')
    } else if (article.category === 'light weight loss') {
      navigate('/premium/lightweight-loss-articles')
    } else if (article.category === 'medium weight gain') {
      navigate('/premium/mediumweight-gain-articles')
    } else if (article.category === 'medium weight loss') {
      navigate('/premium/mediumweight-loss-articles')
    } else if (article.category === 'heavy weight loss') {
      navigate('/premium/heavyweight-loss-articles')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
        <div className="mt-20 max-w-4xl mx-auto p-5">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={header}
              alt="Article Header"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">
                  {article.title}
                </h1>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Description
                </h2>
                <p className="text-gray-600">{article.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Content
                </h2>
                <p className="text-gray-600">{article.content}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Created By
                </h2>
                <p className="text-gray-600">{article.createdBy}</p>
              </div>
            </div>
          </div>
        </div>

        {userType === 'admin' && (
          <div className="flex flex-row justify-end gap-4 max-w-4xl mx-auto mt-4">
            <Link
              to={`/edit-article/${id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Edit Article
            </Link>
            <button
              onClick={deleteArticle}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Remove Article
            </button>
          </div>
        )}
    </>
  )
}

// Article loader function
const articleLoader = async ({ params }) => {
  const res = await fetch(`/api/articles/${params.id}`)
  const data = await res.json()
  return data
}

export { ArticlePage as default, articleLoader }
