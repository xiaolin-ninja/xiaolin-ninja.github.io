import React, {Component} from 'react';
export default class ScrollArrow extends Component {
  render() {
    const styles = {
      position: 'absolute',
      bottom: '50px',
      left: '50%',
      transform: 'translateX(-50%)',
      zindex: 1,
    }

    return (
      <div style={styles}>
        <svg width="15.5" height="20.2" stroke="white" fill="white">
          <path d="M0 12.4l7.8 7.8 7.7-7.8-1-1-6 6V0H7v17.4l-6-6" />
        </svg>
      </div>
    );
  }}