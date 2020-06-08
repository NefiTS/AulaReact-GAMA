// importando o estado no useState
import React, { useState } from 'react';
// importando pacote se for o arquivo tem que por ./ axios
import axios from 'axios';
import * as S from './Home/styled';

// todo componente recebe um parametro chamado props de propriedade, {} precisa para inserir codigo js dentro do codigo js, não pode ter dois ou mais jsx retornados, colocando-os dentro de uma div, fragment e uma tag sem nada <>
function App(props) {  
// controle do componente
const [ usuario, setUsuario ] = useState(''); 
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data)); // importanto os repositorios do git
  
  }
  
  return (
    <S.Container>
      <p> { usuario } </p>

      <S.Input className="usuarioInput"placeholder="Usuario" value={usuario} onChange = {e => setUsuario(e.target.value)}/>

      <S.Button type="button" onClick = {handlePesquisa}>Pesquisar</S.Button>

    </S.Container>
  );
}

export default App;
