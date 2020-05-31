import React, { useState } from 'react'; // importando o estado no useState
import logo from './logo.svg';
import './App.css';

function App(props) {  // todo componente recebe um parametro chamado props de propriedade, {} precisa para inserir codigo js dentro do codigo js, não pode ter dois ou mais jsx retornados, colocando-os dentro de uma div, fragment e uma tag sem nada <>
  
  return (
    <>
      <input name="Usuario" id="Usuario" className="usuarioInput"placeholder="Usuario"/>
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;
