import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Education from './components/Education';
import SocialLinks from './components/Socials';

function App() {
  return (
    <div >
      <Navbar />
      <About/>
      <div className='pb-4'>
      <Skills/>
      </div>
      <Projects/>
      <Education/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
