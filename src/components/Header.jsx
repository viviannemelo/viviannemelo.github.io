import React, { Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Header extends Component {
  render() {
    return (
        <div className="Header">
            <AnchorLink href="#Home">Início</AnchorLink>
            <AnchorLink href="#About">Sobre</AnchorLink>
            <AnchorLink href="#Projects">Projetos</AnchorLink>
        </div>
    );
  }
}

export default Header;
