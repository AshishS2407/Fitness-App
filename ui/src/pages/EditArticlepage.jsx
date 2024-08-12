import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"
import Cookies from 'js-cookie';

const EditArticlePage = () => {

  const article = useLoaderData()

    const [title, setTitle] = useState(article.title)
    const [articleId, setArticleId] = useState(article.articleId)
    const [description, setDescription] = useState(article.description)
    const [createdBy, setCreatedBy] = useState(article.createdBy)
    const [content, setContent] = useState(article.content)
    const [category, setCategory] = useState(article.category)  // Add state for category

 
  
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



      const updatedArticle = {
        title, articleId , description, createdBy, content, category
      };
  
      const res = updateArticle(updatedArticle)
      if (category === 'light weight gain') {
        console.log(`Category: ${category}`);
        navigate('/premium/lightweight-gain-articles');
      } else if (category === 'light weight loss') {
        navigate('/premium/lightweight-loss-articles');
      } else if (category === 'medium weight gain') {
        navigate('/premium/mediumweight-gain-articles');
      } else if (category === 'medium weight loss') {
        navigate('/premium/mediumweight-loss-articles');
      } else if (category === 'heavy weight loss') {
        navigate('/pemium/heavyweight-loss-articles');
      } else {
        navigate('/login');
      }
      
      console.log(res)
      
    }
  
    const updateArticle = async (updatedArticle) => {
      const res = await fetch(`/api/articles/${articleId}`, {
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(updatedArticle)
      })
      return res;
    }







  return ( 
    
    <section className="bg-white mb-20 mt-10">
  <div className="container m-auto max-w-2xl py-2">
    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
      <form onSubmit={submitForm}>
        <h2 className="text-3xl text-blue-600 text-center font-semibold mb-6">
          Update Article
        </h2>

        <div className="mb-4">
          <label className="block text-black font-bold mb-2">
            Article Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border rounded outline-none w-full py-2 px-3 mb-2"
            placeholder="eg. Certified Blockchain Associate"
            required
            value={title}
              onChange={(e) => setTitle(e.target.value)}
  
          />
        </div>



        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-black font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="border rounded outline-none w-full py-2 px-3"
            rows="4"
            placeholder="add a short article description"
            value={description}
            onChange={(e) => setDescription (e.target.value)}
        
          ></textarea>
        </div>

        <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-black font-bold mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className="border rounded outline-none w-full py-2 px-3"
              rows="4"
              placeholder="Content the course"
              value={content}
              onChange={(e) => setContent (e.target.value)}
            
            ></textarea>
          </div>


        <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-black font-bold mb-2"
            >
                Created By
            </label>
            <textarea
              id="createdBy"
              name="createdBy"
              className="border rounded outline-none w-full py-2 px-3"
              placeholder="Created By"
              value={createdBy}
              onChange={(e) => setCreatedBy (e.target.value)}
            
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
            Update article
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

  )
}

export default EditArticlePage