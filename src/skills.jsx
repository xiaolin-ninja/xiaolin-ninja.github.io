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
              body="I code daily in Ruby & SQL at Salesforce (Heroku), and in C++ & Python at NYU. I created this portfolio with ReactJS & CSS, and analyzed data with STATA & R at UCSD. Away from the internet, I participate in speech competitions, volunteer in marine conservation (Rescue Diver), and ran a talent agency with a guy nicknamed 'Sexy Stalin'. I seamlessly transition between support & leadership, and easily adapt to new environments."/>

              <Description title='Not Stupid' body='I went from, "What is git?" to productionizing a web application with user auth & a dynamic database in 10 weeks. I presented "BudBud: A Buddy for your Bud" at Hackbright Academy graduation.
              Straight out of bootcamp, I dove into an enterprise codebase with an on-call rotation, with no prior exposure to the languages, libraries, and tooling. I recently built a TLS/SSL VPN from scratch on VMs... because grad school is wild.'/>

              <Description title='Over-Achiever' body="I am pursuing a MS in Cybersecurity while working full-time. I build RESTful & GraphQL APIs, and optimize scalability of enterprise applications. I am interested in Access Management & Penetration Testing, and aspire to lead a Red Team some day. I hold a Masters in International Affairs from UCSD, specialized in Corporate Social Responsibility. I switched careers to software engineering to chase dreams and challenge convention." />
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
