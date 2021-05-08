import styled from "styled-components";
import Header from "./components/Header";


function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
