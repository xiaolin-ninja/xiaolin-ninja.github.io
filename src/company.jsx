import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class Company extends Component {
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true, useDelay: 'onload'});
  }

  render() {
    return (
      <section className='Company'>
        <Grid>
          <Header />
          <Row>
          <Col md={0} mdOffset={0} smOffset={0} sm={0}></Col>
          <Col md={12} mdOffset={0} smOffset={0} sm={0}>
            <Description/>
          </Col>
          <Col md={0} mdOffset={0} smOffset={0} sm={0}></Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className='sectionHeader'>Why Rockstar?</div>
    )
  }
}

class Description extends Component {
  render() {
    const a = {
      'paddingBottom': '40px',
      'color': '#fff'
    }

    return (
      <div style={a}>
        The amount of happiness and pride it would bring me to spend 50% of my waking hours protecting Grand Theft Auto and Red Dead Redemption from hackers is something that money can't buy. A job should be more than a job, and it's not an exaggeration to say working at Rockstar Games would be a dream come true.
        <p/>
        I've dedicated 2.5 years at Heroku to optimizing the scalability of one of the oldest and largest cloud Platforms as a Service. One of my first projects was creating internal tooling to automate fraud detection. I currently help build Salesforce Evergreen, a serverless Function as a Service, from the ground up --- while pursing a Masters degree in Cybersecurity. In past careers, I helped businesses expand to global markets & wrote a published graduate school thesis on the political & economic impacts of the Deep Water Horizon oil spill.
        <p/>
        I bring to the table a unique combination of experiences in production engineering, security, entrepreneurship, and international policy, and a passion for action. I can't wait to help keep Rockstar players, employees, and intellectual property safe.
      </div>
    )
  }
}

export default Company;