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
              <Description title='Hire Me'
                           body="I design, build, and optimize enterprise web services by day, and learn to exploit security vulnerabilities by night.
                                 I code daily in Ruby, Go, & SQL at Salesforce (Heroku), and in C++ & Python at NYU.
                                 I spent 5 years researching the intersection of Socialism & Capitalism in a globalized future. After an entrepreneurial streak in Asia, I learned to code and began a deep dive into Computer Science." />

              <Description title='I am Super'
                           body='I went from "What is git?" to Senior Software Engineer at Salesforce in 2.5 years. As the only junior member of Heroku, I tackled a massive enterprise codebase and intense on-call rotation with no prior exposure to the languages, libraries, and tooling. I shipped an incident-preventing feature my second month.
                           I am currently pursuing a MS in Cybersecurity at NYU while working full time.'/>

              <Description title='Awesome'
                           body="I bring to the table a unique combination of technical expertise and business acumen.
                           My multicultural background & interdisciplinary education enable me to communicate effectively with empathy, process information from diverse perspectives, and adapt quickly to change.
                           My mission is to build a secure and sustainable future for all, and leave this world better than I found it. ✌️
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
