import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class Experience extends Component {
  componentDidMount() {
    sr.reveal(this.refs.header, {reset:true, viewFactor: 0.4, useDelay: 'onload'})
  }
  render() {
    const styles =
      {
      'marginBottom': '10px',
      'paddingBottom': '30px'
      }

    return (
      <section className='Experience'>
        <div className="header" ref='header'> Experience</div>
        <Grid fluid>
          <Row style={styles}>
            <Circle url='https://www.linkedin.com/in/shxxu'
            bg='./assets/heroku.png' 
            description='Software Engineer on the Core API Team, focusing on Security' />
            <Circle url='http://budbud.outsidethebox.live'
            bg='./assets/budbud.png'
            description='BudBud, a Buddy for your Bud. budbud.outsidethebox.live'/>
            <Circle url='https://github.com/xiaolin-ninja/judgmental-eye-hb'
            bg='./assets/eye.png'
            description='Judgmental Eye: Machine learning AI & movie ratings prediction algorithm.' />
          </Row>
        </Grid>
      </section>
    );
  }
}

class Circle extends Component {
  openNew(url) {
    window.open(url);
  }

  componentDidMount() {
    sr.reveal(this.refs.circle, {reset: true, useDelay: 'onload'});
  }

  render() {
    const width =
    {
      'width':'80%'
    }

    return (
      <Col className='noPad' xs={12} sm={6} md={4}>
        <div className='circleWrapper' ref='circle'>
          <img className='circleBgWrapper' src={this.props.bg} alt='' />
          <div className='circleContentWrapper clickable' onClick={() => this.openNew(this.props.url)}>
            <h3 style={width}>{this.props.description}</h3>
          </div>
        </div>
      </Col>
    );
  }
}

export default Experience;