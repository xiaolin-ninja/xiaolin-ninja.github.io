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
        Last week, <a href="https://www.linkedin.com/in/karenism/">Karen</a> reached out to me about an opening with Enterprise at Slack. I am contentedly growing at Heroku, working on a challenging project with a supportive team, and on-track for career advancement.
        However, as she described the work her security-focused teams have done and what's in store for the future, I was fascinated. I have been itching for the opportunity to contribute to an innovative and security-focused feature, at a fast-growing company with a mission and impact that motivate me.
        <p/>
        Slack is indispensible for a distributed company like Heroku, and the best choice year after year. I depend on Slack daily to connect and collaborate with diverse communities that define my world. I've always been impressed by how Slack remains reliable, user-friendly, and responsive to feedback; while sustaining growth without disenfranchising free-tier users or losing its spark. Slack leadership shows impressive transparency in blog posts, with a candid & relatable voice -- unlike usual corporate propaganda.
        <p/>
        My conversations with Karen and a friend on the Internal Tools team convinced me that Slack is a place that never stops innovating; where talent can flourish with exciting projects, high customer & industry impact, and good vibes from the community. I am eager to further explore this opportunity and the next chapter of my career with Slack.
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

export default Company;