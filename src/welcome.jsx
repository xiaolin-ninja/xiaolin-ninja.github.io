import React, { Component } from 'react';
import {init} from 'ityped';
import ScrollArrow from './components/scrollArrow.jsx';

class Welcome extends Component {
  componentDidMount() {
    init(this.refs.typed, {
      strings:
      ['Shirley Xiaolin Xu',
      'Software Engineer. Adventurer. Scroll for more...'],
      typeSpeed: 70,
      backspeed: 5,
      startDelay: 400,
      backDelay: 300,
      loop: true,
      showCursor: true,
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
        'marginBottom': '10px',
      }

    const padding = {
      'margin-left': '0.8em',
      'textAlign': 'left',
    }

    return (
      <section className='Welcome' style={styles}>
        <ScrollArrow />
        <div className='typed' style={padding} ref='typed' />
      </section>
    );
  }
}

export default Welcome;
