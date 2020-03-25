import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Footer extends Component {
  render() {
  	const styles =
  	{
      'height': '140px',
      'marginTop': '10px',
    }

    const email =
    {
      'color': '#fff',
      'marginLeft': 'auto',
      'marginRight': '0',
      'justifyContent': 'center',
      'marginTop': 'auto',
      'marginBottom': 'auto',
    }

    return (
      <section className='Footer' style={styles}>
        <Grid>
          <Row>
          <Col xs={3} />
          <Icon url='https://github.com/xiaolin-ninja' icon='./assets/githublogo.png' />
          <Icon url='https://www.linkedin.com/in/shxxu/' icon='./assets/linkedinlogo.png' />
          <Icon url='mailto:shirleyxiaolinxu@gmail.com'
          icon='./assets/emaillogo.png'/>
          <Icon
          url='https://drive.google.com/file/d/1Bs3dYQJYbsOUTJwXG_rKC2QU4mcEIwvv/'
          icon='./assets/heels.png'/>
          <Col xs={3} />
          <div style={email}>
          <Col xs={3}> Thank you for your time!</Col></div>
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
    const spacing =
    {
      'margin-right': '0.5em',
      'margin-left': '0.5em'
    }

    return (
      <Col xs={2} style={spacing}><img onClick={() => this.openNew
        // eslint-disable-next-line
        (this.props.url)}
           alt='' className='icon clickable' src={this.props.icon} /></Col>
    )
  }
}

export default Footer;