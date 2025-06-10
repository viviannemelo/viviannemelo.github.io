import React, { Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Header extends Component {
  render() {
    return (
        <div className="Header">
            <AnchorLink href="#Home">Home</AnchorLink>
            <AnchorLink href="#About">About me</AnchorLink>
            <AnchorLink href="#Projects">Projects</AnchorLink>
        </div>
    );
  }
}

export default Header;
