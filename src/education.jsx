import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class Education extends Component {
  componentDidMount() {
    sr.reveal(this.refs.header, {reset:true, viewFactor: 0.4, useDelay: 'onload'})
  }
  render() {
  	return (
  	  <section className='Education'>
        <div className='sectionHeader' ref='header'>Education</div>
        <Grid fluid>
          <Row>
            <Col className='noPad' xs={12} sm={4}>
            <center>UCSD</center>
            <Box
            url='https://www.linkedin.com/in/shxxu'
            bg='./assets/gf.jpg'
            logo='/assets/ucsd.png'
            /></Col>

            <Col className='noPad' xs={12} sm={4}>
            <center>NYU</center>
            <Box
            url='https://www.linkedin.com/in/shxxu'
            bg='./assets/glassesheadshot.jpg'
            logo='./assets/nyutandon.png'
            /></Col>

            <Col className='noPad' xs={12} sm={4}>
            <center>Hackbright Academy</center>
            <Box
            url='https://www.linkedin.com/in/shxxu'
            bg='./assets/hbpresentation.png'
            logo='/assets/hblogo.png'
            /></Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

class Box extends Component {

  openNew(url) {
      window.open(url);
  };

  componentDidMount() {
    sr.reveal(this.refs.box, {reset: true, useDelay: 'onload'});
  };

  render() {

    const text =
    {
      'position': 'absolute',
      'textAlign': 'center'
    }

    const img =
    {
      'position': 'relative',
    }

    return (
      <div ref='box'>
        <div className='circleWrapper'>
          <img className='circleBgWrapper' src={this.props.bg} alt=''/>
          <div className='circleContentWrapper clickable' onClick={() => this.openNew(this.props.url)}>
          <br/><br/>
           <h5 style={text}>{this.props.description}</h5>
           <img className='grayscale logoWrapper' src={this.props.logo} alt=''
           style={img} />
          </div>
          </div>
        </div>
  	);
  }
}

export default Education;
