import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/kahunas-logo.svg";
import PathConstants from "../../pathConstants";
import useSwitchLanguage from "../../hooks/useSwitchLanguage";
import useAuthMiddleware from "../../hooks/useAuthMiddleware";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { switchAllLanguages } = useSwitchLanguage();
  const { isAuthenticated, logout } = useAuthMiddleware();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const handleLoginClick = () => {
    navigate(PathConstants.LOGIN);
  };

  const handleLogoutClick = () => {
    logout(()=>navigate(PathConstants.LOGIN));
  };

  const switchLanguage = (languageKey) => {
    switchAllLanguages(languageKey);
  };

  return (
    <HeaderContainer>
      <div className="header-menu">
        <div className="header-left">
          <Link to={PathConstants.HOME}>
            <img src={logo} alt="Kahunas logo" />
          </Link>
          {isAuthenticated && (
            <ul className="header-list">
              <li>
                <Link
                  to={PathConstants.CLIENTS}
                  className={
                    isActiveLink(PathConstants.CLIENTS) ? "active" : ""
                  }
                >
                  {t("clients")}
                </Link>
              </li>
              <li>
                <Link
                  to={PathConstants.LIBRARY}
                  className={
                    isActiveLink(PathConstants.LIBRARY) ? "active" : ""
                  }
                >
                  {t("library")}
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="header-right">
          {isAuthenticated ? (
            <button onClick={handleLogoutClick}>{t("logout")}</button>
          ) : !isActiveLink(PathConstants.LOGIN) ? (
            <button onClick={handleLoginClick}> {t("login")}</button>
          ) : (
            <></>
          )}
          <div className="language-switcher">
            <span
              className={i18n.language === "en" ? "active" : ""}
              onClick={() => switchLanguage("en")}
            >
              {t("en")}
            </span>
            <span
              className={i18n.language === "ar" ? "active" : ""}
              onClick={() => switchLanguage("ar")}
            >
              {t("ar")}
            </span>
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

      .header-list {
        padding: 0px;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 24px;

        li {
          list-style: none;
        }

        a {
          color: #2b3359;
          text-decoration: none;

          &.active {
            color: #3e97ff;
          }

          &:hover {
            color: #3e97ff;
          }
        }
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
        font-family: "Poppins";
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        cursor: pointer;

        &:hover {
          background: #c4dcf8;
        }
      }

      .language-switcher {
        display: flex;
        align-items: center;
        gap: 20px;

        span {
          font-size: 14px;
          font-weight: 500;
          color: #2b3359;
          cursor: pointer;

          &.active {
            text-decoration: underline;
          }

          &:hover {
            color: #3e97ff;
          }
        }
      }
    }
  }
`;
export default Header;
