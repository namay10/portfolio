import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import python from '../assets/python.png'
import cpp from '../assets/cpp.png'
import github from '../assets/github.png'
import sql from '../assets/sql.png'
import tailwind from '../assets/tailwind.png'

function Skills() {
    const skills=[
        {
            id:1,
            src:html,
            style: "shadow-orange-500",
            name:"HTML",
            
        },
        {
            id:2,
            src:css,
            style:"shadow-blue-500",
            name:"CSS",
            
        },
        {
            id:3,
            src:js,
            style:"shadow-yellow-500",
            name:"JavaScript",
        },  
        {
            id:4,
            src:react,
            style:"shadow-blue-500",
            name:"React",
            
        },
        {
            id:5,
            src:node,
            style:"shadow-green-500",
            name:"Node.js",
           
        },
        {
            id:6,
            src:express,
            style:"shadow-white",
            name:"Express",
            
        },
        {
            id:7,
            src:mongo,
            style:"shadow-green-500",
            name:"MongoDB",
            
        },
        {
            id:8,
            src:python,
            style:"shadow-yellow-500",
            name:"Python",
           
        },
        
        {
            id:9,
            src:cpp,
            style:"shadow-blue-500",
            name:"C++",
            
        },
        {
            id:10,
            src:sql,
            style:"shadow-blue-500",
            name:"SQL",
        },
        {
            id:11,
            src:github,
            style:"shadow-white",
            name:"Git",
        }
        ,
        {
            id:12,
            src:tailwind,
            style:"shadow-cyan-500",
            name:"Tailwind CSS",
        }
    ];
  return (
    <div
    name="Skills"
    className='bg-bluee w-full min-h-screen '
  >
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-black p-2 inline">
          Skills
        </p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {skills.map((skill)=>(
            <div key={skill.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}` }>
                <img src={skill.src} alt="" className='w-20 mx-auto' />
                <p className='mt-4 '>{skill.name}</p>
            </div>
        ))}
      </div>
    </div>
  </div>

  )
}

export default Skills