import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ExercisesList = () => {
  const { t } = useTranslation();
  const columns = [t("exercise_name"), t("muscle_group"), t("strength")];
  const rows = [];
  
  for (let i = 0; i < 5; i++) {
    rows.push(
      <tr key={i}>
        <td>{t("exercise_name_value")}</td>
        <td>{t("muscle_group_value")}</td>
        <td>{t("strength_value")}</td>
      </tr>
    );
  }

  return (
    <ExercisesTable>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
       {rows}
      </tbody>
    </ExercisesTable>
  );
};

const ExercisesTable = styled.table`
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
    text-align: start;
    padding: 8px;
    font-size: 12px;
    background-color: #fff;
    color: #9095a0;
    border: none;
  }
`;

export default ExercisesList;
