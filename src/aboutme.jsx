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
  	  }

    const padding =
      {
        'marginBottom': '10px',
      }

  	return (
      <section className='AboutMe' style={padding}>
        <div ref='main'>
          <div style={styles}>About Me</div>
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
    return (
      <div>
        <h1 className='linedHeader'>Shirley Xiaolin Xu, M.IA.</h1>
        <ul>
          <li> Fluent in English, Chinese (Mandarin), Spanish, Ruby; proficient in Python, SQL, French; familiar with Go, C++, ReactJS, HTML/CSS, Cantonese, & German.</li>
          <li> <a href="https://www.github.com/xiaolin-ninja">Back-end engineer</a> at Heroku/Salesforce. <a href="https://www.youtube.com/watch?v=N2ZdcOT1kwo">MS Cybersecurity student</a> at NYU Tandon.<br/>
            Past identities:
            <ul>
            <li> <a href="https://www.linkedin.com/in/shxxu/" target="_blank" rel="noopener noreferrer">
                Business Development Consultant</a></li>
            <li> <a href="https://gps.ucsd.edu/_files/faculty/gourevitch/gourevitch_cs_xu.pdf" target="_blank" rel="noopener noreferrer">
                International Affairs Scholar (UCSD)</a></li>
            <li> Model Agent, Airbnb Host, Pilates Instructor, & EFL Teacher <br/> </li>
            </ul>
          </li>
          <br></br>
          <p> I learn languages to connect with people all over the world. <span role="img" aria-label="emoji">🌸</span></p>
        </ul>
      </div>
    )
  }
}

class Photo extends Component {
  render() {
    return (
        <div>
        <img className='photo' src={'./assets/uke2.jpg'}
             alt='' width="100%" height='100%'/>
        </div>
    )
  }
}

export default AboutMe;
