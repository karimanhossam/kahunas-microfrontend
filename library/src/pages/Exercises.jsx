import ExercisesList from "../components/ExercisesList";
import exercisesData from "../assets/data/exercises.json";

const Exercises = () => {
    return <ExercisesList exercises={exercisesData}/>
} 
export default Exercises;