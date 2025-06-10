import React, { Component } from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Blog from '../components/Blog';

class About extends Component {
  render() {
    return (
      <div>
        <AboutMe />
        <Blog />
        <Skills />
      </div>
    );
  }
}

export default About;
