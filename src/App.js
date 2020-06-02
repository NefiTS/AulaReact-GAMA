import React, { useState } from 'react'; // importando o estado no useState
import axios from 'axios'; // importando pacote se for o arquivo tem que por ./

function App(props) {  // todo componente recebe um parametro chamado props de propriedade, {} precisa para inserir codigo js dentro do codigo js, não pode ter dois ou mais jsx retornados, colocando-os dentro de uma div, fragment e uma tag sem nada <>
  const [ usuario, setUsuario ] = useState(''); // controle do componente
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  
  }
  
  return (
    <>
      <p> { usuario } </p>

      <input className="usuarioInput"placeholder="Usuario" value={usuario} onChange = {e => setUsuario(e.target.value)}/>

      <button type="button" onClick = {handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
