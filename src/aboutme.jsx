import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class AboutMe extends Component {
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true, useDelay: 'onload'});
  }

  render() {
  	return (
      <section className='AboutMe'>
        <Grid>
          <Header />
          <Row>
            <Col md={4} mdOffset={0} smOffset={0} sm={4}><Photo /></Col>
            <Col md={8} mdOffset={0} smOffset={0} sm={4}><Row><Description/></ Row></Col>
          </Row>
        </Grid>
      </section>
  	);
  }
}

class Header extends Component {
  render() {
    return (
      <div className='sectionHeader'>About Me</div>
    )
  }
}

class Description extends Component {
  render() {
    const a = {
      'paddingBottom': '30px'
    }

    return (
      <div style={a}>
        <ul>
          <li> Fluent in English, Chinese (Mandarin), Spanish, & Ruby <br/>
               Familiar with Go, C++, Python, SQL, ReactJS, HTML/CSS, Cantonese, & German
          </li>
          <p/>
          <li> <a href="https://www.github.com/xiaolin-ninja">API engineer</a> at Heroku/Salesforce. <br/> <a href="https://www.youtube.com/watch?v=N2ZdcOT1kwo">MS Cybersecurity candidate</a> at New York University.<br/>
            <p/>
            Past identities:
            <ul>
            <li> <a href="https://www.linkedin.com/in/shxxu/" target="_blank" rel="noopener noreferrer">
                Business Development Consultant</a></li>
            <li> <a href="https://gps.ucsd.edu/_files/faculty/gourevitch/gourevitch_cs_xu.pdf" target="_blank" rel="noopener noreferrer">
                International Affairs Scholar (M.IA, UCSD)</a></li>
            <li> Model Agent, Airbnb Host, Pilates Instructor, & EFL Teacher <br/> </li>
            </ul>
          </li>
          <br/>
          <p> I learn languages to connect with people all over the world. <span role="img" aria-label="emoji">🌸</span></p>
        </ul>
      </div>
    )
  }
}

class Photo extends Component {
  render() {
    return (
    <div className='Photo'>
      <img className='photo' src={'./assets/uke2.jpg'}
       alt=''/>
    </div>
    )
  }
}

export default AboutMe;
