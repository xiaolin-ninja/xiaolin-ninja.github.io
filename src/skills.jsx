import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class Skills extends Component {
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true, useDelay: 'onload'});
  }

  render() {
    return (
      <section className='Skills'>
        <div ref='main'>
          <Grid>
            <Row>
              <Description title='Well-Rounded'
              body="I build RESTful & GraphQL APIs and optimize the scalability of a Cloud PaaS by day, and explore security vulnerabilities in complex systems by night. My multicultural background & interdisciplinary training enable me to adapt quickly to new environments. I hold a Masters in International Affairs from UCSD, specialized in Business Management & Corporate Social Responsibility; I switched careers to software engineering to chase dreams and challenge convention."/>

              <Description title='Not Stupid' body='I went from, "What is git?" to productionizing a web application with user auth & a dynamic database in 10 weeks. I presented "BudBud: A Buddy for your Bud" at Hackbright Academy graduation.
              I dove into an enterprise codebase and an on-call rotation, with no prior exposure to the languages, libraries, or tooling, & shipped an incident-preventing feature my second month. I recently built a TLS/SSL VPN from scratch on VMs... because grad school is wild.'/>

              <Description title='"#Rockstar"' body="I am pursuing a MS in Cybersecurity at NYU while working full time. I aim to specialize in IoT Security, & aspire to lead a Red Team some day. I code daily in Ruby, Go, & SQL at Salesforce (Heroku), and in C & Python at NYU. I created this portfolio with ReactJS, and analyzed data with STATA & R at UCSD. Away from the internet, I train martial arts, volunteer in marine conservation (Rescue Diver), and ran a talent agency with a dude nicknamed 'Sexy Stalin'. " />
            </Row>
          </Grid>
          <Row>
          </Row>
          </div>
      </section>
    )
  }
}

class Description extends Component {
  render() {
  	const header =
  	  {
  	  	'textAlign': 'center',
  	  }

    const body = {
      'padding': '0.5em',
      'color': '#e6ffff'
    }

    return (
      <Col sm={4}>
        <h2 style={header} className='linedHeader'>{this.props.title}</h2>
        <div className='background' style={body}>
          <p>{this.props.body}</p>
        </div>
      </Col>
    )
  }
}

export default Skills;
