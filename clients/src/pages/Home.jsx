import { useTranslation } from "react-i18next";
import { useState } from "react";
import styled from "styled-components";
import clientsList from "../assets/data/clients.json"
import SearchBar from "../components/SearchBar";
import ClientsList from "../components/ClientsList";

const Home = () => {
  const { t } = useTranslation();
  const [clients, setClients] = useState(clientsList);


  const handleClientsSearch = (query) => {
    if (!query) setClients(clientsList);

    const filteredClients = clientsList.filter(client =>
      client.name.toLowerCase().includes(query.toLowerCase())
    );

    setClients(filteredClients);
  };

  return (
    <MainContainer>
      <h1>{t("all_clients")} ({clientsList.length})</h1>
      <SearchBar placeholder={t("search_client")} onSearch={handleClientsSearch}/>
      <ClientsList clients={clients}/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: #181c32;
    margin: 0px;
  }

  .search-input {
    margin-top: 12px;
    width: 255px;
  }
`;
export default Home;
