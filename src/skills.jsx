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
        'marginBottom': '40px',
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
              <Description title='Full Stack' body='Python, JavaScript, Ruby, React, Flask, PostGreSQL, and whatever I can learn. In 3 months, I went from zero exposure to .' />
              <Description title='Business Acumen' body="I'm super cool because of these reasons I guess." />
              <Description title='Development' body='Creator, designer, project manager, developer, and tester: in 4 weeks, I built BudBud from scratch with no prior software background. I practiced Agile methodologies & development best practices.' />
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
      'background': 'rgba(255,255,255,0.5)',
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