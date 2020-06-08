import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';


ReactDOM.render( // Dentro do Index o REACT é responsavel por pegar o JavaScript e inserir na DOM ou na árvore de elementos// Dentro do Index o REACT é responsavel por pegar o JavaScript e inserir na DOM ou na árvore de elementos
    <App />, // passando a propriedade Title
  document.getElementById('root') // recebe dois parametros o elemento que quer inserir no html e o  html que vai receber o componente, chamando o JSX que é o html dentro do JS,função app retornando JSX(html dentro do java script)
);


