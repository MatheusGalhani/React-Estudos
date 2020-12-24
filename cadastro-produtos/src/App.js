import React from 'react';
import Navbar from './components/navbar';
import Rotas from './router';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Navbar></Navbar>
        <Rotas></Rotas>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
