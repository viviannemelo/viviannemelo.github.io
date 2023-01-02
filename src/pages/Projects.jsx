import React, { Component } from 'react';

import ReactTestingLibrary from '../custom/images/projects/rtl.jpg';
import OnlineStore from '../custom/images/projects/onlinestore.png';
import Trybetunes from '../custom/images/projects/trybetunes.png';
import ShoppingCart from '../custom/images/projects/shoppingcard.png';
import ZooFunction from '../custom/images/projects/zoofunction.jpg';
import PixelsArt from '../custom/images/projects/pixelsart.png';

class Projects extends Component {
  render() {
    return (
      <div className='Projects' id="Projects">
        <h2>PROJETOS</h2>
        <div className='main-projects'>
          <tr>
            <td>
              <img src={ReactTestingLibrary} alt='react testing library project' width="320" height="180"/>
              <h3>React Testing Library</h3>
              <p>Testes com RTL</p>
              <a href="https://github.com/viviannemelo/react-testing-library-trybe" target="blank">
              <button>código</button>
              </a>
            </td>
            <td>
              <img src={OnlineStore} alt='frontend online store project' width="320" height="180"/>
              <h3>Front-end Online Store</h3>
              <p>E-commerce</p>
              <div>
              <a href="https://github.com/viviannemelo/react-testing-library-trybe" target="blank">
              <button>código</button>
              </a>
              <a href="https://viviannemelo.github.io/project-pixels-art-trybe/" target="blank">
                <button>preview</button>
              </a>
              </div>
            </td>
            <td>
              <img src={Trybetunes} alt='trybetunes project' width="320" height="180"/>
              <h3>Trybetunes</h3>
              <p>Player de música</p>
              <div>
              <a href="https://github.com/viviannemelo/project-trybetunes-trybe" target="blank">
              <button>código</button>
              </a>
              <a href="https://viviannemelo.github.io/project-trybetunes-trybe/" target="blank">
                <button>preview</button>
              </a>
              </div>
            </td>
            <td>
              <img src={ShoppingCart} alt='shopping cart project' width="320" height="180" />
              <h3>TrybeShopping</h3>
              <p>E-commerce</p>
              <div>
              <a href="https://github.com/viviannemelo/project-shopping-cart-trybe" target="blank">
              <button>código</button>
              </a>
              <a href="https://viviannemelo.github.io/project-shopping-cart-trybe/" target="blank">
                <button>preview</button>
              </a>
              </div>
            </td>
            <td>
              <img src={ZooFunction} alt='zoo function project' width="320" height="180"/>
              <h3>Zoo Function</h3>
              <p>Sistema interno de um zoológico</p>
              <a href="https://github.com/viviannemelo/project-trybe-zoo-function" target="blank">
              <button>código</button>
              </a>
            </td>
            <td>
              <img src={PixelsArt} alt='pixels art project' width="320" height="180"/>
              <h3>Pixels Art</h3>
              <p>Pintura com pixels</p>
              <div>
              <a href="https://github.com/viviannemelo/project-pixels-art-trybe" target="blank">
              <button>código</button>
              </a>
              <a href="https://viviannemelo.github.io/project-pixels-art-trybe/" target="blank">
                <button>preview</button>
              </a>
              </div>
            </td>
          </tr>
        </div>
      </div>
    );
  }
}

export default Projects;
