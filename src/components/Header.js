import styled from "styled-components";

import whiteSpotifyLogo from "../assets/logo-white.png";
import userAvatarImg from "../assets/user-avatar.jpg";

function Header() {
  return (
    <div clasName="">
      <div className="wrapper">
        <img className="logo" src={whiteSpotifyLogo} alt="logo" />
        <div className="navigation">
          <div className="navbar">
            <ul>
              <li>
                <a href="/">Premium</a>
              </li>
              <li>
                <a href="/">Suporte</a>
              </li>
              <li>
                <a href="/">Baixar</a>
              </li>
            </ul>
            <div className="profile">
              <img
                src={userAvatarImg}
                alt="user avatar"
                width="40"
                height="40"
              />
              <p>Perfil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Container = styled.header`
  height: 80px;
  width: 100%;

  display: flex;
  /* align-items: center; */
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.black};

  .wrapper {
    max-width: 900px;

    width: 100%;
    height: 100%;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 39px;
      width: 140px;
    }

    ul {
      display: flex;
      flex-direction: row;
      gap: 32px;
      align-items: center;

      li {
        .separator {
          width: 2px;
          height: 100%;
          background-color: ${({ theme }) => theme.colors.white};
        }

        .profile {
          display: flex;
          flex-direction: row;
          gap: 5px;
          align-items: center;

          img {
            border-radius: 50%;
          }
        }
      }
    }
  }
`;

export default Header;
