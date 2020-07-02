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
      <div className='sectionHeader'>Why Square?</div>
    )
  }
}

class Description extends Component {
  render() {
    const a = {
      'paddingBottom': '20px',
      'color': '#fff',
    }

    return (
      <div style={a}>
        Square SF was the first tech office I ever set foot in. Actually, I got lost & convinced some folks to badge me into an elevator that led to Uber instead. A stark, dark contrast to the spacious & sunny Square office in the same building. I suppose it was my first attempt at Social Engineering. ¯\_(ツ)_/¯
        <p/>
        Mark Funk, a former Security Engineer at Square, was an invaluable mentor during my transition to software engineering. The fact that a company kept such an incredible human and engineer for so long speaks volumes of its culture and investment in talent -- underscored by the fact that Chief Security Officer at Square is a woman of color. I have much respect for Square's impact on commerce, am very excited to explore the myriad of threats such a complex data processing & auth system faces.
        <p/>
        Building a scalable intrusion detection platform is right up my alley:
        I've dedicated 2.5 years at Heroku to optimizing the scalability of one of the oldest and largest cloud Platforms as a Service. One of my first projects was creating internal tooling to automate fraud detection. I currently help build Salesforce Evergreen, a serverless Function as a Service, from the ground up --- while pursing a Masters degree in Cybersecurity. In past careers, I helped businesses expand to global markets & wrote a published graduate school thesis on the political & economic impacts of the Deep Water Horizon oil spill.
        <p/>
        I bring to the table a unique combination of experiences in production engineering, security, entrepreneurship, and international policy, and a passion for action. I can't wait to help build great tools and keep Square customers safe.
      </div>
    )
  }
}

export default Company;