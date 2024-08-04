import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next"
import useAuthMiddleware from "../hooks/useAuthMiddleware";
import PathConstants from "../pathConstants";
import headingLogo from "../assets/images/heading-icon.png"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthMiddleware();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, ()=> navigate(PathConstants.CLIENTS));
  };

  return (
    <MainContainer>
       <div className="form-heading">
          <img src={headingLogo} alt="heading logo"/>
          <h1>{t("welcome_back")}!</h1>
        </div>
        <p>{t("login_to_account")}</p>
      <FormContainer onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            placeholder={t("email")}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
      
          <input
            type="password"
            value={password}
            placeholder={t("password")}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        <button type="submit">{t("login")}</button>
      </FormContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: 0 auto;
  width: 352px;

  .form-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;

    h1 {
      font-size: 28px;
      font-weight: 600;
      color: #181C32;
      margin: 0px;
    }
  }

  p {
    margin: 0px;
    font-size: 16px;
    color: #585A63;
    margin-bottom: 12px;

  }
`;

const FormContainer = styled.form`
display: flex;
flex-direction: column;
gap: 12px;

  input {
    padding: 8px 16px;
    font-family: "Poppins";
    font-size: 15px;
    border: 1px solid #DADEE7;
    border-radius: 4px;
    height: 28px;
    color: #9095A0;

    &:focus-visible {
      outline: none;
    }
}

button {
    color: #fff;
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 500;
    background: #3E97FF;
    border: 1px solid #3E97FF;
    border-radius: 12px;
    width: 100%;
    height: 40px;
    padding: 0 16px;
    margin-top: 28px;
    box-shadow: unset;
    cursor: pointer;

    &:hover {
      background: #48ABF6FF;
      border: 1px solid #48ABF6FF;
    }
}
`;

export default LoginForm;
