import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <AnchorLink href="#Home">Início</AnchorLink>
      <AnchorLink href="#About">Sobre</AnchorLink>
      <AnchorLink href="#Projects">Projetos</AnchorLink>
      <a href="https://www.linkedin.com/in/viviannemelo/" target="blank">LinkedIn</a>
      <a href="https://github.com/viviannemelo" target="blank">GitHub</a>
      <a href="mailto:viviannemmelo@gmail.com" target="blank">Contato</a>
  </div>
    );
  }
}

export default Footer;
