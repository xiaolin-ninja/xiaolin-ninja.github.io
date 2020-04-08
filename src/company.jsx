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
      <div className='sectionHeader'>Why Aha!?</div>
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
      I deeply value the people behind the code, and strive to build a strong sense of community at work; where everyone is invested in each other's success. While I am contentedly growing at Heroku and working on a challenging team with great coworkers, we have morphed from 300 to 30,000 after integrating with Salesforce. I am aching to contribute to a smaller, close-knit company that maximizes innovation and minimizes corporate bottlenecks.
      <p/>
      I believe I would be a great fit for Aha! in the <u><a href="https://www.aha.io/company/careers/current-openings/security_engineer_us" style={a}>Security Engineer role</a></u>. I work on Ruby/Rails APIs on the Web Services team at Heroku, a container-based PaaS built on AWS that streamlines the deployment, maintenance, & scaling of apps on the Cloud. I have also worked on Security-related projects like automating platform abuse detection and implementing DMARC to prevent phishing attacks using our domain; and would love to make finding and fixing security vulnerabilities my priority.
      <p/>
      I love Aha!'s dedication to giving back to the community. In 2 years with Salesforce, I've logged over 120 volunteer hours and leveraged donation matching to raise ~$5000 for marine conservation. I have a Master in International Affairs, specialized in Corporate Social Responsibility, and am a strong proponent of Social Capitalism.
      <p/>
      I work for an internationally distributed company, while pursuing a MS in Cybersecurity online: I know the joys of remote collaboration, and am adept at handling the frustrations. Glassdoor reviews have convinced me that Aha! is a place where talent can flourish with exciting projects, high customer & industry impact, and genuinely enriching work culture. I hope to further explore this opportunity and the next chapter of my career with Aha!.
      </div>
    )
  }
}

export default Company;