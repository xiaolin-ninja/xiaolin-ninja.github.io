import React, { Component } from 'react';
import ScrollArrow from './components/scrollArrow.jsx';

class Welcome extends Component {
  render() {
    const styles =
      {
        'height': '100vh',
        'display':'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'color': '#ffffff',
        'marginBottom': '10px',
      }

    return (
      <section className='Welcome' style={styles}>
        <ScrollArrow />
        <div className="header" ref='header'> Shirley
        Xiaolin Xu </div>
      </section>
    );
  }
}

export default Welcome;
