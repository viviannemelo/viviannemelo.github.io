import React, { Component } from 'react';
import Curriculo from '../components/doc/curriculo-vivianne-melo.pdf';

class Home extends Component {
  render() {
    return (
      <div id="Home" className='Home'>
        <div className='info-main'>
          <span>Olá, visitante! :)</span>
          <h1>Vivianne Melo</h1>
          <h2>Desenvolvedora Web Front-end Junior
          </h2>
          <a href={Curriculo} download="Currículo - Vivianne Melo">
          <button>Baixar CV</button>
          </a>
        </div>
        <div className='img-main'>
        </div>
      </div>
    );
  }
}

export default Home;
