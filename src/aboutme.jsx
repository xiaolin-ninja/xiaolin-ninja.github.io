import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class AboutMe extends Component {
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true, useDelay: 'onload'});
  }
  render() {
  	const styles =
  	  {
        'height': '200px',
        'width': '100%',
        'display':'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'fontSize': '2.9em',
        'marginBottom': '10px'
  	  }

    const padding =
      {
        'marginBottom': '10px',
      }

  	return (
      <section className='AboutMe' style={padding}>
        <div ref='main'>
          <div style={styles} >About Me</div>
          <Content />
        </div>
      </section>
  	);
  }
}

class Content extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6} mdOffset={0} smOffset={0} sm={4}><Photo /></Col>
          <Col md={6} mdOffset={0} smOffset={0} sm={10}><Description /></Col>
        </Row>
      </Grid>
    )
  }
}

class Description extends Component {
  render() {
    const padding =
      {
        'marginBottom': '50px',
      }

    return (
      <div style={padding}>
        <h1 className='linedHeader'>Shirley Xiaolin Xu, M.IA.</h1>
        <ul>
          <li> Fluent in Spanish, Chinese, English; proficient in Python, JavaScript, SQL, HTML/CSS, Ruby, & French</li>
          <li> I am a <a href="https://www.github.com/xiaolin-ninja">full-stack software developer</a> based in San Francisco, California.<br/>
            Past identities:
            <ul>
            <li> <a href="https://www.linkedin.com/in/shxxu/" target="_blank" rel="noopener noreferrer">
                Business Development Consultant</a></li>
            <li> <a href="https://gps.ucsd.edu/_files/faculty/gourevitch/gourevitch_cs_xu.pdf" target="_blank" rel="noopener noreferrer">
                International Affairs Scholar</a></li>
            <li> Travel blogger <a target="_blank" href="https://instagram.com/xiaolin.ninja" rel="noopener noreferrer">
                @xiaolin.ninja</a></li>
            <li> Airbnb Host, Pilates Instructor, English Professor, & Model Agent <br/> </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

class Photo extends Component {
  render() {
    const padding =
      {
        'margin': '0.6em',
      }

    return (
        <div>
        <img className='img-responsive center-block myPhoto' src={'./assets/trainMe.jpg'}
             alt='' width="100%" height='100%' />
        <p style={padding}> I strive to improve daily and live a life of adventure, courage, and compassion. <span role="img" aria-label="emoji">🌸</span></p>
        </div>
    )
  }
}

export default AboutMe;