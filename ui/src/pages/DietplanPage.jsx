import React from 'react'
import header from '../assets/images/header.jpg'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { getUserType } from './LoginPage'
import { toast } from 'react-toastify'

const DietplanPage = () => {
  const { id } = useParams()
  const dietplan = useLoaderData()
  const navigate = useNavigate()
  const userType = getUserType()

  const deleteDietplan = async () => {
    const confirm = window.confirm("Are you sure you want to delete this diet plan?")
    if (!confirm) return

    const res = await fetch(`/api/dietplans/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      toast.success('Diet plan deleted successfully')

      switch (dietplan.category) {
        case 'light weight gain':
          navigate('/premium/lightweight-gain-dietplans')
          break
        case 'light weight loss':
          navigate('/premium/lightweight-loss-dietplans')
          break
        case 'medium weight gain':
          navigate('/premium/mediumweight-gain-dietplans')
          break
        case 'medium weight loss':
          navigate('/premium/mediumweight-loss-dietplans')
          break
        case 'heavy weight loss':
          navigate('/premium/heavyweight-loss-dietplans')
          break
        default:
          navigate('/login')
      }
    } else {
      toast.error('Failed to delete the diet plan')
    }
  }

  return (
    <>
      <div className="bg-gray-50 text-gray-900 mt-20 pb-10">
        <div className="max-w-4xl mx-auto p-5">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={header}
              alt="Diet Plan Thumbnail"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">
                  {dietplan.title}
                </h1>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Plan
                </h2>
                <p className="text-gray-600">{dietplan.plan}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Content
                </h2>
                <p className="text-gray-600">{dietplan.content}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Created By
                </h2>
                <p className="text-gray-600">{dietplan.createdBy}</p>
              </div>
            </div>
          </div>
        </div>

        {userType === 'admin' && (
          <div className="flex flex-row justify-end gap-4 max-w-4xl mx-auto mt-4">
            <Link
              to={`/edit-dietplan/${id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Edit Diet Plan
            </Link>
            <button
              onClick={deleteDietplan}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              Remove Diet Plan
            </button>
          </div>
        )}
      </div>
    </>
  )
}

const dietplanLoader = async ({ params }) => {
  const res = await fetch(`/api/dietplans/${params.id}`)
  const data = await res.json()
  return data
}

export { DietplanPage as default, dietplanLoader }
