import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

import whiteSpotifyLogo from "../assets/logo-white.png";
import userAvatarImg from "../assets/user-avatar.jpg";

function Header() {
  return (
    <Container>
      <div className="wrapper">
        <img className="logo" src={whiteSpotifyLogo} alt="logo" />
        <div className="flex-row items-center">
          <div className="flex-row medium-gap content-center items-center">
            <ul className="flex-row small-gap">
              <Link name="Premium" />
              <Link name="Suporte" />
              <Link name="Baixar" />
            </ul>
            <Line />
            <div className="profile small-gap">
              <img
                src={userAvatarImg}
                alt="user avatar"
                width="40"
                height="40"
              />
              <A className="flex-row mini-gap">
                <p>Perfil</p>
                <IoIosArrowUp />
              </A>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const LinkContainer = styled.li`
  display: flex;
  align-items: center;
`;

const Container = styled.header`
  height: 80px;
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.opacityBlack};

  .wrapper {
    max-width: 900px;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 39px;
      width: 140px;
    }

    .navbar ul {
      display: flex;
      flex-direction: row;
      gap: 32px;
      align-items: center;
    }
  }

  .profile {
    display: flex;
    flex-direction: row;

    align-items: center;

    img {
      border-radius: 50%;
    }
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .items-center {
    align-items: center;
  }

  .content-center {
    justify-content: center;
  }

  .mini-gap {
    gap: 8px;
  }

  .small-gap {
    gap: 16px;
  }

  .medium-gap {
    gap: 32px;
  }
`;

const Link = ({ name }) => (
  <LinkContainer>
    <A className="text-white" href="/">
      {name}
    </A>
  </LinkContainer>
);

const A = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const Line = styled.div`
  width: 1px;
  height: 16px;
  background-color: #fff;
`;

export default Header;
