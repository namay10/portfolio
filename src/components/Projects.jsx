import React from 'react'
import twitter from '../assets/twitter.png'
import blog from '../assets/blog.png'
import restaurant from '../assets/restaurant.png'
import currency from '../assets/currency.jpg'

function Projects() {
  const projects=[
    {
      id:1,
      title:"Twitter Sentiment Analysis",
      src: twitter,
      github:"https://github.com/namay10/Twitter_Sentiment_Analysis"
    },
    {
      id:2,
      title:"Blog Website",
      src:blog,
      github:"https://github.com/namay10/blog-website"
    },
    {
      id:3,
      title:"Restaurant Landing Page",
      src:restaurant,
      github:"https://github.com/namay10/Restaurant_Landing_Page"
    },
    {
      id:4,
      title:"Currency converter",
      src:currency,
      github:"https://github.com/namay10/Currency-Convertor"
    }
  ]
  return (
    <div name="Projects"
    className='w-full h-full bg-bluee'>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div className='mt-12 mb-4'>
        <p className="text-4xl font-bold border-b-4 border-black p-2  inline">
          Projects
        </p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
      {projects.map((project)=>(
        <div key={project.id} className='shadow-md hover:scale-105 duration-500 rounded-lg flex flex-col'>
          <img src={project.src} alt=""  className='w-full flex-grow'/>
          <p className='mt-4 py-1'>{project.title}</p>
          <div className='flex justify-center'>
          <button className='px-2  bg-gray-600 text-white text-lg rounded-lg hover:bg-blue-600'>
          <a href={project.github} target='_parent'>Github Link</a>
          </button>
          </div>
        </div>
      ))}
      </div>
      </div>

    </div>
  )
}

export default Projects