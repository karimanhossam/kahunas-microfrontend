import WorkoutsList from "../components/WorkoutsList";
import workoutsData from "../assets/data/workouts.json";

const Workouts = () => {
    return <WorkoutsList workouts={workoutsData}/>
} 
export default Workouts;