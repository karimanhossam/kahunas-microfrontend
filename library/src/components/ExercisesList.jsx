import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ExercisesList = ({ exercises }) => {
  const { t } = useTranslation();
  const columns = [t("exercise_name"), t("muscle_group"), t("strength")];

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
        {exercises.map((exercise, index) => (
          <tr key={index}>
            <td>{exercise.exerciseName}</td>
            <td>{exercise.muscleGroup}</td>
            <td>{exercise.strength}</td>
          </tr>
        ))}
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
