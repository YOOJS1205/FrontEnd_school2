import styled from 'styled-components';

const AA = styled.div`
  margin: 40px;
`

const BB = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
`

function App() {
  return (
    <AA>
      <BB>hello world</BB>
      <p>lorem</p>
    </AA>
  );
}

export default App;