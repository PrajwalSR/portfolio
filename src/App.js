// App.js
import React from 'react';
import './App.css';
import Main from './components/1Main/Main';
import Education from './components/2Education/Education';
import Experience from './components/3Experience/Experience';
import Volunteering from './components/4Volunteering/Volunteering';
import Projects from './components/5Projects/Projects';
import Contact from './components/6Contact/Contact';


function App() {
  return (
    <div className="App">
      <Main />
      <Education />
      <Experience />
      <Volunteering />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;