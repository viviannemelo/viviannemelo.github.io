import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './components/Contact';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Contact />
        <Header />
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
