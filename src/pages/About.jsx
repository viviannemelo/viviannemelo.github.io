import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='About' id="About">
        <div className='about-text'>
          <p>Olá! Me chamo Vivianne, sou uma recém e por acaso apaixonada por desenvolvimento web.
            Iniciei minha jornada em 2022 e venho cada vez mais buscando conhecer novas tecnologias,
            aqui você encontra alguns projetos desenvolvidos durante esse período.
            No mais, amante de animais, degustadora de cappuccinos e ouvinte de boas histórias. Fique à vontade.
          </p>
        </div>
        <div className='main-skills'>
          <h2>PRINCIPAIS HABILIDADES</h2>
          <div className="skills">
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html-icon" width="70" height="70"/>
            <p>HTML5</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css-icon" width="70" height="70"/>
            <p>CSS3</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js-icon" width="70" height="70"/>
            <p>JavaScript</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react-icon" width="70" height="70"/>
            <p>React</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="jest-icon" width="70" height="70"/>
            <p>Jest</p>
            </div>
            <div className='rtl'>
            <img src="https://raw.githubusercontent.com/testing-library/dom-testing-library/main/other/octopus.png" alt="rtl-icon" width="70" height="70"/>
            <p>Testing Library</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node-icon" width="70" height="70"/>
            <p>NodeJS</p>
            </div>
            </div>
            <div className='extra-skills'>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma-icon" width="55" height="55"/>
            <p>Figma</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="ps-icon" width="55" height="55"/>
            <p>Photoshop</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bt-icon" width="55" height="55"/>
            <p>Bootstrap</p>
            </div>
            <div className='mui'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="mui-icon" width="55" height="55"/>
            <p>Material UI</p>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
