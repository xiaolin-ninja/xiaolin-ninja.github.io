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
              <Description title='Cross-Functional' body='Creator, project
              manager, developer, designer and tester. I built my first dynamic
              web application in 4 weeks, practicing agile methodologies. I was
              chosen to
              present "BudBud: A Buddy for your Bud" at Hackbright Academy
              graduation.'/>
              <Description title='Well-Rounded' body='Python, JavaScript,
              PostgreSQL, React.js, Flask, Jinja, HTML/CSS, jQuery, Bootstrap,
              STATA &
              more to learn! This website is built with React.js.'/>
              <Description title='Adaptable' body="Highly versatile
              software
              engineer with business acumen & professional experience in 3
              continents. Calculated risk-taker. Equally logical and
              creative; experienced
              in identifying &
              meeting consumer needs." />
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