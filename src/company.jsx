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
      <div className='sectionHeader'>Why Slack?</div>
    )
  }
}

class Description extends Component {
  render() {
    const a = {
      'paddingBottom': '20px',
      'color': '#000'
    }

    return (
      <div style={a}>
        Now more than ever, Slack is an indispensible tool for productivity across the world. I've been impressed by Slack leadership's transparency in blog posts, and the company's ability to continually innovate and rapidly scale while remaining reliable and reactive to customer needs -- like the new Enterprise Key Management feature. A good friend of mine on the Internal Tools team has sang praises of the great culture at Slack, and it sounds like the mid-sized, mission-driven company of my dreams.
        <p/>
        I've dedicated 2.5 years at Heroku to optimizing the scalability of one of the oldest and largest cloud Platforms as a Service. One of my first projects was creating internal tooling to automate fraud detection. I currently help build Salesforce Evergreen, a serverless Function as a Service, from the ground up --- while pursing a Masters degree in Cybersecurity. In past careers, I helped businesses expand to global markets & wrote a published graduate school thesis on the political & economic impacts of the Deep Water Horizon oil spill.
        <p/>
        I bring to the table a unique combination of experiences in production engineering, security, entrepreneurship, and international policy, and a passion for action. I can't wait to help keep Slack customer data safe.
      </div>
    )
  }
}

export default Company;