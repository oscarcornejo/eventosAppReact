import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListarEventos from './components/ListarEventos';

import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';


function App() {
  const titulo="Eventos en React con EventBrite API";
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header titulo={titulo}/>

        <div className="uk-container">
          <Formulario />

          <ListarEventos />
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
