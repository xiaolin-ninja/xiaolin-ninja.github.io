import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Footer extends Component {
  render() {
  	const styles =
  	{
      'height': '140px',
      'marginTop': '20px',
    }

    return (
      <section className='Footer' style={styles}>
        <Grid>
          <Row>
          <Col xs={3} />
          <Icon url='https://github.com/xiaolin-ninja' icon='./assets/githublogo.png' />
          <Icon url='https://www.linkedin.com/in/shxxu/' icon='./assets/linkedinlogo.png' />
          <Icon url='mailto:xiaolin@tuta.io' icon='./assets/emaillogo.png' />
          <Col xs={3} />
          </Row>
        </Grid>
      </section>
    )
  }
}

class Icon extends Component {
  openNew(url) {
      window.open(url);
  };
  render() {
    return (
      <Col xs={2}><img onClick={() => this.openNew(this.props.url)}
           alt='' className='icon clickable' src={this.props.icon} /></Col>
    )
  }
}

export default Footer;