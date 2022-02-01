import styled from 'styled-components';
import { useState } from 'react'

const Title = styled.h3`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.colors.primary};

  a {
    color: yellow;
    &:hover {
      color: black;
    }
  }
`

function App() {

  const [fontSize, setFontSize] = useState(30)
  return (
    <>
      <h1>App</h1>
      <Title fontSize={fontSize}>Que maravilha de componente estilizado
        <p><a href="http://localhost">Jaime</a></p>
      </Title>
      <button onClick={() => (setFontSize(fontSize + 1))}>Aumentar Texto </button>
    </>
  );
}

export default App;
