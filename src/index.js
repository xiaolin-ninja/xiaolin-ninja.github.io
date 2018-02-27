import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './components.css';

import Welcome from './welcome.jsx';
import ScrollArrow from './components/scrollArrow.jsx';
import Experiences from './experiences.jsx';
import Projects from './projects.jsx';
import AboutMe from './aboutme';
import Skills from './skills';
import Footer from './footer';

ReactDOM.render(
  <div>
    <ScrollArrow />
    <Welcome />
    <Experiences />
    <Projects />
    <AboutMe />
    <Skills />
    <Footer />
  </div>,

  document.getElementById('root')
);
