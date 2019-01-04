import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class Skills extends Component {
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true, useDelay: 'onload'});
  }

  render() {
  	// const styles =
  	//   {
   //      'height': '200px',
   //      'margin-bottom': '10',
   //      'display':'flex',
   //      'align-items': 'center',
   //      'justify-content': 'center',
   //      'font-size': '3em',
   //  }

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
              <Description title='Cross-Functional' body='Designer, project
              manager, developer, and tester. It took me 4 weeks to build & deploy my first full-stack web application with a dynamic database. I presented "BudBud: A Buddy for your Bud" at Hackbright Academy graduation.'/>

              <Description title='Well-Rounded' body='I primarily code in Ruby & SQL at Heroku/Salesforce, and C++ at NYU. I learned to code with Python, built this portfolio in React JS, and analyzed data using STATA, R, & Excel at UCSD.'/>

              <Description title='Versatile' body="Interdisciplinary
              professional experienced in identifying stakeholder needs and delivering quality code. I am pursuing a Masters in Cybersecurity at NYU. I hold a Masters in International Business from UCSD, ran a boutique talent agency, and made the career switch in 2018 to chase dreams & challenge convention." />
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