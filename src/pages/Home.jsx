import React, { Component } from 'react';
import Resume from '../components/doc/resume-vivianne-melo.pdf';


class Home extends Component {
  render() {
    return (
      <div id="Home" className='Home'>
        <div className='info-main'>
          <span>Hello! :)</span>
          <h1>I'm Vivianne Melo</h1>
          {/* <h1 id="typewriter">Vivianne Melo</h1> */}
          <h2>Quality Assurance | Software Automation Test Engineer</h2>
          <a href={Resume} download="Resume - Vivianne Melo">
          <button>Download Resume</button>
          </a>
        </div>
        <div className='img-main'>
        </div>
      </div>
    );
  }
}

export default Home;
