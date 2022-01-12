import { Dropdown } from "./componentes/Dropdown";
import { useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState()

  return (
    <div>
    <h1>Seletor de Pokémon</h1>
    <Dropdown setPokemon={setPokemon} title='Selecione seu Pokémon Inicial' options={['Bulbassauro', 'Charmander', 'Squirtle'] }/>
    {pokemon && <p>O pokémon selecionado foi: {pokemon}</p>}
    </div>
  );
}

export default App;
