import { useTranslation } from "react-i18next";
import styled from "styled-components";
import trainingIcon from "../assets/images/training-icon.svg";

const WorkoutsList = () => {
  const { t } = useTranslation();
  const columns = [
    { title: t("workout_name"), icon: trainingIcon },
    { title: t("workout_details"), icon: trainingIcon },
    { title: t("exercises"), icon: trainingIcon },
  ];

  const rows = [];

  for (let i = 0; i < 3; i++) {
    rows.push(
      <tr key={i}>
        <td>{t("workout_name_value")}</td>
        <td>{t("workout_details_value")}</td>
        <td>10</td>
      </tr>
    );
  }
  return (
    <WorkoutsTable>
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
       {rows}
      </tbody>
    </WorkoutsTable>
  );
};

const WorkoutsTable = styled.table`
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

  .cell {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default WorkoutsList;
