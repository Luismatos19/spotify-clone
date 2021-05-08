import styled from "styled-components";
import Header from "./components/Header";
import SongCard from "./components/SongCard";

import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import image3 from './assets/image-3.jpg';
import image4 from './assets/image-4.jpg';
import image5 from './assets/image-5.jpg';
import image6 from './assets/image-6.jpg';

function App() {
  return (
    <Container>
      <Header />
      <div className="main-section">
        <section>
          <div class="home-message">
            <small>Tocadas recentemente</small>
            <h1>Escute de novo</h1>
            <h3>Continue curtindo suas músicas de onde parou.</h3>
            <button>Abrir o web player</button>
          </div>
          <div class="cards">
            <SongCard src={image1} />
            <SongCard src={image2} />
            <SongCard src={image3} />
            <SongCard src={image4} />
            <SongCard src={image5} />
            <SongCard src={image6} />
          </div>
        </section>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(#c074b2, #8ab5e8);

  .main-section {
    margin-top: 40px;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    max-width: 900px;
    height: 100%;
    width: 100%;

    display: grid;
    grid: 100% / 300px auto;
  }

  section .home-message {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamily};
    text-align: start;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    small {
      line-height: 18px;
      font-size: 12px;
      font-weight: 700;
    }

    h1 {
      font-size: 64px;
      line-height: 73.6px;
      font-weight: 900;
    }

    h3 {
      font-size: 20px;
      line-height: 33.6px;
      font-weight: 700;
    }

    button {
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 500px;
      min-width: 160px;
      width: 252px;
      height: 65px;

      margin-top: 32px;

      font-size: 15px;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 16px;
      text-align: center;
      text-decoration-color: rgb(255, 255, 255);
      text-decoration-line: none;
      text-decoration-style: solid;
      text-transform: uppercase;
      vertical-align: middle;
      white-space: normal;
    }
  }

  .cards {
    display: grid;
    gap: 4px;
    grid: repeat(2, 199px) / repeat(3, 199px);
  }
`;

export default App;
