import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import './components.css';

import Welcome from './welcome.jsx';
import ScrollArrow from './components/scrollArrow.jsx';
import Education from './education.jsx';
import AboutMe from './aboutme';
import Skills from './skills';
import Company from './company';
import Footer from './footer';

ReactDOM.render(
  <div>
    <ScrollArrow />
    <Welcome />
    <AboutMe />
    <Company />
    <Education />
    <Skills />
    <Footer />
  </div>,

  document.getElementById('root')
);
