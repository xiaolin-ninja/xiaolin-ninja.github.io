import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class Skills extends Component {
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true, useDelay: 'onload'});
  }

  render() {
    const paddingB =
      {
        'marginBottom': '50px',
      }

    const paddingT =
      {
        'height': '60px',
      }

    return (
      <section className='Skills'>
        <div ref='main'>
          <Grid>
          <div style={paddingT} />
            <Row>
              <Description title='Well-Rounded'
              body="I code daily in Ruby & SQL, building RESTful & GraphQL APIs at Salesforce (Heroku) and in C++ and Python at NYU. I built this portfolio in ReactJS, and analyzed data with STATA & R at UCSD. Away from the computer, I volunteer as a scuba ranger (Rescue Diver) in Belize, and ran a modelling agency in East Asia with a guy nicknamed 'Sexy Stalin'. I transition seamlessly between support and leadership, and easily adapt to new environments."/>

              <Description title='Not Stupid' body='I went from, "What is git?" to productionizing a web application with user authorization & a dynamic database in 10 weeks. I presented "BudBud: A Buddy for your Bud" at Hackbright Academy graduation.
              Straight out of bootcamp, I dove into an enterprise codebase with an on-call rotation, with no prior exposure to the languages or libraries. I recently built a TSL/SSL VPN from scratch... because grad school is wild.'/>

              <Description title='Over-Achiever' body="I am pursuing a MS in Cybersecurity at NYU while working full time. My interests skew toward Access Management and Penetration Testing, & I aspire to lead a Red Team some day. I hold a Masters in International Affairs from UCSD, specialized in Corporate Social Responsibility. I made the career switch to software engineering in 2018 to chase dreams & challenge convention." />
            </Row>
          </Grid>
          <Row>
          <div style={paddingB}>
          <p/>
          <p/>
          </div>
          </Row>
          </div>
      </section>
    )
  }
}

class Description extends Component {
  render() {
  	const styles =
  	  {
  	  	'textAlign': 'center',
  	  }

    const body = {
      'padding': '0.5em'
    }

    // const padding = {
    //   'padding' : '50px'
    // }

    return (
      <Col sm={4}>
        <h2 style={styles} className='linedHeader'>{this.props.title}</h2>
        <div className='background' style={body}>
          <p>{this.props.body}</p>
        </div>
      </Col>
    )
  }
}

export default Skills;
