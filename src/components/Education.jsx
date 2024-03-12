import React from 'react'
import thapar from '../assets/thapar.png';
import shiv from '../assets/shiv.png';
import dps from '../assets/dps.png';
function Education() {
  const education=[
    {
      id:1,
      title:"B.E",
      school:"Thapar Institute of Engineering and Technology",
      year:"2020-2024",
      src:thapar
    },
    {
      id:2,
      title:"High School",
      school:"Shiv Public School, Jammu",
      year:"2018-2020",
      src:shiv
    },
    {
      id:3,
      title:"Senior Secondary School",
      school:"Delhi Public School, Jammu",
      year:"Till 2018",
      src:dps
    },
  ]
  return (
    <div name="Education"
     className='w-full min-h-screen bg-bluee'>
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    <div className='mt-12 mb-4'>
      <p className="text-4xl font-bold border-b-4 border-black p-2  inline">
        Education
      </p>
    </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  px-12 sm:px-0">
        {education.map((edu)=>(
          <div key={edu.id} className='bg-gray-500 rounded-lg flex flex-col hover:scale-105 duration-500 shadow-md'>
          <img className="w-auto h-auto flex-grow flex rounded-full " src={edu.src} alt=""></img>
          <div className='flex justify-between '>
          <h1 className='font-bold text-left'>{edu.title}</h1>
          <p className='font-serif text-right'>{edu.year}</p>
          </div>
          <p className='font-sans'>{edu.school}</p>
          </div>

        ))}
          
      </div>
    </div>
    </div>
  )
}

export default Education