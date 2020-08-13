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
      <div className='sectionHeader'>Why VICE?</div>
    )
  }
}

class Description extends Component {
  render() {
    const a = {
      'paddingBottom': '20px',
      'color': '#fff'
    }

    return (
      <div style={a}>
        Bold, honest, and unapologetically authentic. Those are words I would use to describe myself, and adjectives that have made me a loyal consumer of VICE for years. I am a highly mission-driven person, and if I am going to spend 50% of my waking hours contributing to a corporation, I want to spend it protecting the data and integrity of an impactful modern media company with ethical, hard-hitting content that inspires and invigorates generations.
        <p/>
        I've dedicated 2.5 years at Heroku to optimizing the scalability of one of the oldest and largest cloud Platforms as a Service. One of my first projects was creating internal tooling to automate fraud detection. I currently help build Salesforce Evergreen, a serverless Function as a Service, from the ground up --- while pursing a Masters degree in Cybersecurity. In past careers, I helped businesses expand to global markets & wrote a published graduate school thesis on the political & economic impacts of the Deep Water Horizon oil spill.
        <p/>
        I bring to the table a unique combination of experiences in production engineering, security, entrepreneurship, and international policy, and a passion for action. I can't wait to help keep VICE Media secure.
      </div>
    )
  }
}

export default Company;