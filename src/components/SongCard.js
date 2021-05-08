import styled from "styled-components";

const SongCard = ({src}) => {
  return (
      <Container>
        <img src={src} alt="sol-e-churrasco"/>
        {/* <h2>Sol e Churrasco</h2> */}
      </Container>
  );
}

const Container = styled.figcaption`
  box-shadow: 1px 1px 16px -2px rgb(0 0 0 / 30%);
  img {
    width: 100%;
    height: 100%;
  }
`;

export default SongCard;
