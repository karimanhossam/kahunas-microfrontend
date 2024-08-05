import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {useLocation} from "react-router-dom";

const LibraryLayout = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('workouts');

  useEffect(() => {
    if (location.pathname.includes('exercises')) {
      setActiveTab('exercises');
    } else {
      setActiveTab('workouts');
    }
  }, [location.pathname]);

  return (
    <>
      <Tabs>
        <Link to="workouts" className={activeTab === "workouts" ? "active" : ""} onClick={()=>{setActiveTab("workouts")}}>{t("workouts")}</Link>
        <Link to="exercises" className={activeTab === "exercises" ? "active" : ""} onClick={()=>{setActiveTab("exercises")}}>{t("exercises")}</Link>
      </Tabs>
      <ContentWrapper>
      <Outlet />
      </ContentWrapper>
    </>
  );
};

const Tabs = styled.div`
  display: flex;
  gap: 5px;

  a {
    padding: 10px 20px;
    text-decoration: none;
    font-size: 12px;
    color: #9095a0;
    border-bottom: 1px solid #9095a0;

    &.active {
      color: #3e97ff;
      border-bottom: 1px solid #3e97ff ;
    }

    &:hover {
      color: #3e97ff;
    }
  }
`;

const ContentWrapper = styled.div`
    margin-top: 20px;
`

export default LibraryLayout;
