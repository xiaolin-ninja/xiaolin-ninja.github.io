import React, { Component } from 'react';
import {init, destroy} from 'ityped';
import ScrollArrow from './components/scrollArrow.jsx';

class Welcome extends Component {
  componentDidMount() {
    init(this.refs.typed, {
      strings:['Who is Shirley?', 'Full-Stack Software Engineer.  Adventurer.  Scroll for more...',],
      typeSpeed: 100,
      backspeed: 30,
      startDelay: 800,
      backDelay: 400,
      loop: true,
      showCursor: false,
    });
  }

  render() {
    const styles =
      {
        'height': '100vh',
        'display':'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'color': '#ffffff',
        'margin-bottom': '10px',
      }

    return (
      <section className='Welcome' style={styles}>
        <ScrollArrow />
        <div><span className='typed' ref='typed' /></div>
      </section>
    );
  }
}

export default Welcome;
