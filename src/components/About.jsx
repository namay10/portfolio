import React from 'react';
import namay from '../assets/namay.png';
import {ReactTyped} from "react-typed";

function About() {
  return (
    <div name="About" className='w-full min-h-screen bg-bluee text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='md:pr-8'>
            <h2 className='font-bold text-4xl'>
              {/* {" "}
              <ReactTyped strings={["Namaste!"]} typeSpeed={100} loop /> */}
            </h2>
            <p className='mt-6 text-2xl font-bold text-justify'>
              I am a {""}
              <ReactTyped
          strings={["Engineer", "Developer", "Coder","Foodie"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar=""
          showCursor={true}
        />
            </p>
            <p className='text-xl mt-6 text-justify'>
              I'm a super motivated Full Stack 
              Developer who's all about crafting cool and user-friendly web apps. I'm your 
              go-to person for both the front-end and back-end magic, and I've got a solid
               track record of making scalable web solutions happen. I'm all about bringing 
               innovation to the table and ready to jump into a fast-paced dev team where we 
               can create awesome stuff together! Let's make the web even more amazing.
            </p>

            <p className='text-xl mt-6 text-justify'>
              I'm totally into cooking, like, it's my jam! Huge foodie here, and I love 
              exploring new places. When I'm not in the kitchen, you'll find me playing 
              sports or just vibing to some awesome tunes. Life's all about good food, 
              new adventures, and the perfect playlist!
            </p>
          </div>
          <div className='md:pl-8'>
            <img
              src={namay} // Replace with your image source
              alt='Your Alt Text'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
