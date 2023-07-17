import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import RecipesApp from '../custom/images/projects/recipesapp.jpg';
import Trivia from '../custom/images/projects/trivia.jpg';
import Trybewallet from '../custom/images/projects/trybewallet.jpg';
import ReactTestingLibrary from '../custom/images/projects/rtl.jpg';
import UnitTests from '../custom/images/projects/unittests.jpg'
import OnlineStore from '../custom/images/projects/onlinestore.png';
import Trybetunes from '../custom/images/projects/trybetunes.png';
import ShoppingCart from '../custom/images/projects/shoppingcard.png';
import ZooFunction from '../custom/images/projects/zoofunction.jpg';
import PixelsArt from '../custom/images/projects/pixelsart.png';
import BlogsAPI from '../custom/images/projects/blogsapi.jpg';
import TrybersAndDragons from '../custom/images/projects/trybersdragons.jpg';
import TFC from '../custom/images/projects/tfc.jpg';
import OneForAll from '../custom/images/projects/oneforall.jpeg';
import TalkerManager from '../custom/images/projects/talkermanager.jpeg';

class Projects extends Component {
  render() {
    const handleDragStart = (e) => e.preventDefault();

    const itemsTests = [
      <a href="https://github.com/viviannemelo/react-testing-library-trybe" target="blank"><img src={ReactTestingLibrary} alt='react testing library project' width="520" height="280" onDragStart={handleDragStart} /><h3>React Testing Library</h3><p>Desenvolvimento de testes pra aplicação desenvolvida em React</p></a>,
      <a href="https://github.com/viviannemelo/javascript-unit-tests" target="blank"><img src={UnitTests} alt='js unit tests' width="520" height="280" onDragStart={handleDragStart} /><h3>Testes Unitários</h3><p>Implementação de testes unitários utilizando Jest</p></a>,
    ]
    const itemsFront = [
      <a href="https://github.com/viviannemelo/project-recipes-app" target="blank"><img src={RecipesApp} alt='recipes app project' width="520" height="280" onDragStart={handleDragStart} /><h3>Recipes App</h3><p>Aplicaçãp de gerenciamento de receitas</p></a>,
      <a href="https://github.com/viviannemelo/project-trivia-game" target="blank"><img src={Trivia} alt='trivia project' width="520" height="280" onDragStart={handleDragStart} /><h3>Trivia</h3><p>Jogo Trivia de perguntas e respostas</p></a>,
      <a href="https://github.com/viviannemelo/project-trybewallet" target="blank"><img src={Trybewallet} alt='trybewallet project' width="520" height="280" onDragStart={handleDragStart} /><h3>Trybewallet</h3><p>Carteira digital</p></a>,
      <a href="https://github.com/viviannemelo/project-online-store-trybe" target="blank"><img src={OnlineStore} alt='frontend online store project' width="520" height="280" onDragStart={handleDragStart} /><h3>Online Store</h3><p>E-commerce</p></a>,
      <a href="https://github.com/viviannemelo/project-trybetunes-trybe" target="blank"><img src={Trybetunes} alt='trybetunes project' width="520" height="280" onDragStart={handleDragStart} /><h3>TrybeTunes</h3><p>Plataforma de música simulando iTunes e Spotify, desenvolvido com React</p></a>,
      <a href="https://github.com/viviannemelo/project-shopping-cart-trybe" target="blank"><img src={ShoppingCart} alt='shopping cart project' width="520" height="280" onDragStart={handleDragStart} /><h3>Shopping Cart</h3><p>E-commerce utilizando API, Web Storage e Testes Assíncronos</p></a>,
      <a href="https://github.com/viviannemelo/project-trybe-zoo-function" target="blank"><img src={ZooFunction} alt='zoo function project' width="520" height="280" onDragStart={handleDragStart} /><h3>Zoo Function</h3><p>Simulação de sistema interno de controle de informações de um zoológico, utilizando Javascript</p></a>,
      <a href="https://viviannemelo.github.io/project-pixels-art-trybe/" target="blank"><img src={PixelsArt} alt='pixels art project' width="520" height="280" onDragStart={handleDragStart} /><h3>Pixels Art</h3><p>Criação de página interativa, utilizando manipulação de DOM</p></a>,
    ];

    const itemsBack = [
      <a href="https://github.com/viviannemelo/project-blogs-api" target="blank"><img src={BlogsAPI} alt='blogs api' width="520" height="280" onDragStart={handleDragStart} /><h3>Blogs API</h3><p>Api e banco de dado para produção de um blog</p></a>,
      <a href="https://github.com/viviannemelo/project-trybers-and-dragons" target="blank"><img src={TrybersAndDragons} alt='trybers-and-dragons' width="520" height="280" onDragStart={handleDragStart} /><h3>Trybers and Dragons</h3><p>Jogo de RPG</p></a>,
      <a href="https://github.com/viviannemelo/tfc-trybe-project" target="blank"><img src={TFC} alt='tfc project' width="520" height="280" onDragStart={handleDragStart} /><h3>Trybe Futebol Club</h3><p>Gerenciamento e acompanhamento de jogo de futebol</p></a>,
      <a href="https://github.com/viviannemelo/project-one-for-all-trybe" target="blank"><img src={OneForAll} alt='one for all' width="520" height="280" onDragStart={handleDragStart} /><h3>One for All</h3><p>Normalização de tabela de banco de dados simulando Spotify, criação de queries para consultar e obter informações utilizando MySQL</p></a>,
      <a href="https://github.com/viviannemelo/project-talker-manager-trybe" target="blank"><img src={TalkerManager} alt='talker manager' width="520" height="280" onDragStart={handleDragStart} /><h3>Talker Manager</h3><p>Desenvolvimento de uma API de CRUD, utilizando node.js</p></a>,
    ];

    return (
      <div className='Projects' id="Projects">
        <h2>PROJETOS</h2>
        <div className='main-projects'>
          <div className='test-project'>
            <h2 className='subtitle'>Tests</h2>
            <AliceCarousel mouseTracking items={itemsTests} />
          </div>
          <div className='front-projects'>
            <h2 className='subtitle'>Front-end</h2>
            <AliceCarousel mouseTracking items={itemsFront} />
          </div>
          <div className='back-projects'>
            <h2 className='subtitle'>Back-end</h2>
            <AliceCarousel mouseTracking items={itemsBack} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
