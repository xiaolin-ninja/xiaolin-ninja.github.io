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
                           body="I build RESTful & GraphQL APIs and optimize the scalability of a Cloud PaaS by day, and explore security vulnerabilities in complex systems by night.
                                 I code daily in Ruby, Go, & SQL at Salesforce (Heroku), and in C++ & Python at NYU.
                                 I hold a Masters in International Affairs from UCSD, specialized in Business Management & Corporate Social Responsibility; I switched careers to software engineering to chase dreams and challenge convention." />

              <Description title='Not Stupid'
                           body='I went from "What is git?" to Senior Software Engineer at Salesforce in 2.5 years. As the first junior member of the Heroku Web Services team, I dove into a massive enterprise codebase and intense on-call rotation with no prior exposure to the languages, libraries, and tooling; & shipped an incident-preventing feature my second month.
                           I am currently pursuing a MS in Cybersecurity at NYU while working full time.'/>

              <Description title='Mission-Driven'
                           body="I bring to the table the unique combination of technical expertise and business experience.
                           My multicultural background & interdisciplinary education enable me to communicate effectively with empathy, process information from diverse perspectives, and adapt quickly to change.
                           As a global citizen, I aim to build a secure & sustainable world for all: socially, economically, environmentally, & digitally.
                           "/>
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
