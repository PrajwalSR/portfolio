// App.js
import React from 'react';
import './App.css';
import Hero from './components/1Main';
import Experience from './components/3Experience';
import Education from './components/2Education';
import Contact from './components/6Contact';
import Volunteering from './components/4Volunteering';
import Projects from './components/5Projects';

function App() {
  return (
    <div className="App">
      <Hero />
      <Education />
      <Experience />
      <Volunteering />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;