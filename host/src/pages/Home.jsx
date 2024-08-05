import styled from "styled-components";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/images/hero-img.png";
const Home = () => {
  const { t } = useTranslation();
  return (
    <HeroContainer>
     <div className="hero-top">`
      <span>{t("home_pre_title")}</span>
      <h1>{t("home_title")}</h1>
      <p>{t("home_post_title")}</p>
      </div>
      <img src={heroImage} alt="hero image"/>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`

.hero-top {
  margin: 0 auto;
  text-align: center;
  width: 60%;
}

  span {
    letter-spacing: 2px;
    font-weight: 600;
    text-transform: uppercase;
    color: #657482;
    display: block;
    margin-bottom: 10px;
  }

  h1 {
    margin-top: 0px;
    margin-bottom: 24px;
    font-size: 48px;
    font-weight: 600;
  }

  p {
    margin-top: 0px;
    margin-bottom: 32px;
    color: #626470;
  }

  img {
    width: 100%;
  }
`;
export default Home;
