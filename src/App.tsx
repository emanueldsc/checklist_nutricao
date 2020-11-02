import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './App.scss';
import CheckList from './components/CheckList';
import Header from './components/Header';

import { DataProvider } from './context/data';

function App() {
  return (
    <DataProvider>
      <div className="container">
        <header className="cabecalho">
          <Header />
        </header>
        <section className="checklist">
          <CheckList />
        </section>
        <section className="cardapio" style={ { display: 'none' } } >
          cardapio
      </section>
        <footer className="rodape">
          emanuel douglas sousa costa <FaGithub onClick={ () => window.open('https://github.com/emanueldsc', '_blank') } size={ 24 } color="#FFF" />
        </footer>
      </div>
    </DataProvider>
  );
}

export default App;
