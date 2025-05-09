// App.js
import React from 'react';
import './App.css';
import Experience from './components/3Experience';
import Education from './components/2Education/Education';
import Contact from './components/6Contact';
import Volunteering from './components/4Volunteering';
import Projects from './components/5Projects';
import Main from './components/1Main/Main';


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