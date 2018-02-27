import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './components/scrollReveal.jsx';

class Projects extends Component {
  componentDidMount() {
    sr.reveal(this.refs.header, {reset:true, viewFactor: 0.4, useDelay: 'onload'})
  }
  render() {
    const styles =
      {
      'margin-bottom': '20px',
      }

    return (
      <section className='Projects'>
        <div className="header" ref='header'> Projects</div>
        <Grid fluid>
          <Row style={styles}>
            <Circle url='https://github.com/xiaolin-ninja/' bg='./assets/discord.jpg' description='Description1' />
            <Circle url='https://github.com/xiaolin-ninja/' bg='./assets/sipnstirred.png' description='Description2' />
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

export default Projects;