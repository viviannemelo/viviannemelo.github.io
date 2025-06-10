import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='div-contact'>
        <div className='contato'>
        <a href="mailto:viviannemmelo@gmail.com" target="blank">
            <button>Contact</button>
        </a>
        </div>
        <div className='linkedin'>
        <a href="https://www.linkedin.com/in/viviannemelo/" target="blank">
            <button>LinkedIn</button>
        </a>
        </div>
      </div>
    );
  }
}

export default Contact;
