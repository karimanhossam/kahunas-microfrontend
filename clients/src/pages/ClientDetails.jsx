import { useParams } from 'react-router-dom';
import clientsList from "../assets/data/clients.json";
import Error from "host/Error"
import { useTranslation } from 'react-i18next';

const ClientDetails = () => {
    const {t} = useTranslation();
    const { id } = useParams(); 
    const client = clientsList.find(client => client.id === id);

    if (!client) return <Error/>

    return (
        <>
          <h1>{client.name}</h1>
          <p>{t("last_activity")}: {client.lastActivity} {t("days_ago")}</p>
          <p>{t("training_progress")}: {client.trainingProgress}</p>
          <p>{t("status")}: {t(client.status)}</p>
          <p>{t("category")}: {t(client.category)}</p>
        </>
      );
}
export default ClientDetails;