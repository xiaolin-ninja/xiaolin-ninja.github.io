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
        Square SF was the first tech office I ever set foot in. Well, I followed some folks into an elevator that led to Uber instead. A stark, dark contrast to the spacious & sunny Square office in the same building, & was escorted to the right office. I suppose it was my first attempt at Social Engineering. ¯\_(ツ)_/¯
        <p/>
        Mark Funk, a former Security Engineer at Square, was an invaluable mentor during my transition to software engineering. For a company to keep such an incredible human and engineer for so long, speaks volumes of its culture and investment in talent. As a former small business owner, I have much respect for Square's impact on commerce, and am very excited to explore the myriad of threats such a complex data processing & auth system faces.
        <p/>
        Building a scalable intrusion detection platform is right up my alley:
        I've spent the past 2.5 years at Heroku optimizing the scalability of one of the oldest and largest cloud Platforms as a Service. One of my first projects was creating internal tooling to automate fraud detection. I also helped build Salesforce Evergreen, a serverless Function as a Service, from the ground up --- while pursing a Masters degree in Cybersecurity. In my past careers, I helped businesses expand to global markets & wrote one of two graduate school theses on the political & economic impact of the Deep Water Horizon oil spill.
        <p/>
        I bring to the table a unique combination of experience in production engineering, security, business, and international policy, and a passion for Cybersecurity. I can't wait to help build great tools and keep Square customers safe.
      </div>
    )
  }
}

export default Company;