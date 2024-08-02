import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-menu">
        <div className="header-left">
          <img src="/assets/images/kahunas-logo.svg" alt="Kahunas Logo" />
          <ul className="header-menu">
            <li>About</li>
            <li>Features</li>
            <li>Demo</li>
            <li>Coaches</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="header-right">
          <button>Login</button>
          <div className="lang-wrapper">
            <span>EN</span>
            <span>AR</span>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 22px 0px;
  border-bottom: 1px solid #edf0f5;
  position: fixed;
  z-index: 1000;

  .header-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0px 60px;

    .header-left {
      display: flex;
      align-items: center;
      gap: 60px;

      .header-menu {
        padding: 0px;
        list-style: none;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        color: #2b3359;
        display: flex;
        align-items: center;
        gap: 24px;
      }
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 60px;

      button {
        border-color: transparent;
        background: #eef6ff;
        color: #3e97ff;
        outline: none;
        padding: 12px 22px;
        border-radius: 12px;
        outline: none;
        box-shadow: none;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        cursor: pointer;

        &:hover {
          background: #c4dcf8;
        }
      }

      .lang-wrapper {
        display: flex;
        align-items: center;
        gap: 20px;

        span {
          font-size: 14px;
          font-weight: 500;
          color: #2b3359;
          cursor: pointer;
        }
      }
    }
  }
`;
export default Header;
