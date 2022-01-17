import React from 'react';
import { HashRouter } from 'react-router-dom'
import Header from './templates/header/Header';
import Routes from './routes/Routes';
import Footer from './templates/footer/Footer';
import './font-awesome/css/font-awesome.css'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </HashRouter>

  );
}

export default App;
