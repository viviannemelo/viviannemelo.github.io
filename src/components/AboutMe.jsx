import React, { Component } from 'react';
import { FaCode, FaUsers, FaTools, FaLightbulb } from 'react-icons/fa';

class AboutMe extends Component {
  render() {
    return (
      <div className="About bg-[#202020] text-white px-6 py-12" id="About">
        <div className="about-text max-w-4xl mx-auto text-left text-lg font-raleway">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#BFE55E'}}>About Me</h2>

          <div className="icon-text-wrapper">
            <FaCode />
            <p>
              I’m a passionate QA Engineer with solid experience in automation, performance, and accessibility testing.
            </p>
          </div>

          <div className="icon-text-wrapper">
            <FaUsers />
            <p>
              I enjoy working closely with teams to deliver quality software that really works for users.
            </p>
          </div>

          <div className="icon-text-wrapper">
            <FaTools />
            <p>
              I lead testing efforts, help improve processes, and share knowledge to keep projects running smoothly.
            </p>
          </div>

          <div className="icon-text-wrapper">
            <FaLightbulb />
            <p>
              What motivates me is curiosity, the desire to solve problems, the constant growth, and the belief that learning from others is one of the best parts of this job.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
