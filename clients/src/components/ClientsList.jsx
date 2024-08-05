import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import nameIcon from "../assets/images/name-icon.svg";
import activityIcon from "../assets/images/activity-icon.svg";
import trainingIcon from "../assets/images/training-icon.svg";
import categoryIcon from "../assets/images/category-icon.svg";
import statusIcon from "../assets/images/status-icon.svg";

const ClientsList = ({ clients }) => {
  const { t } = useTranslation();
  const columns = [
    { title: t("name"), icon: nameIcon },
    { title: t("last_activity"), icon: activityIcon },
    { title: t("training_progress"), icon: trainingIcon },
    { title: t("category"), icon: categoryIcon },
    { title: t("status"), icon: statusIcon },
  ];

  return (
    <ClientsTable>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>
              <div className="cell">
                <img
                  src={column.icon}
                  alt={`${column.title} icon`}
                  width={16}
                  height={16}
                />
                {column.title}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {clients.map((client, index) => (
          <tr key={index}>
            <td>
              <Link
                key={index}
                to={`${client.id}`}
              >
                {client.name}{" "}
              </Link>
            </td>
            <td>
              {client.lastActivity} {t("days_ago")}
            </td>
            <td>{t(client.status)}</td>
            <td>{t(client.category)}</td>
            <td>{client.trainingProgress}</td>
          </tr>
        ))}
      </tbody>
    </ClientsTable>
  );
};

const ClientsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  text-overflow: ellipsis;

  tr {
    border-bottom: 1px solid #dadee7;
  }

  th {
    font-weight: 600;
  }

  th,
  td {
    padding: 8px;
    font-size: 12px;
    background-color: #fff;
    color: #9095a0;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: #3e97ff;
    }
  }

  .cell {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default ClientsList;
