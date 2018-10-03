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
              manager, developer, and tester. I built my first dynamic
              web application in 4 weeks, practicing agile methodologies. I was
              chosen to present "BudBud: A Buddy for your Bud" at Hackbright Academy graduation.'/>
              <Description title='Well-Rounded' body='Ruby, Python, JavaScript,
              PostgreSQL, Redis, React.js, Flask, Jinja, Rails, Sinatra, HTML/CSS, jQuery, Bootstrap, STATA & more to learn! This website is designed by me, built with React.JS and CSS, and hosted on Heroku.'/>
              <Description title='Adaptable' body="Highly versatile
              software engineer experienced in identifying and satisfying stakeholder needs. I hold a Masters in International Affairs, ran a small business, and made the career switch in 2018 to chase dreams & challenge convention." />
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