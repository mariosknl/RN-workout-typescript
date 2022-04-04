import { containsKey, getData, removeItem, storedData } from ".";
import data from "../data.json";
import { Workout } from "../types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData("workout-data");
  return workouts;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey("workouts");
  if (!hasWorkouts) {
    await storedData("workout-data", data);
    return true;
  }

  return false;
};

export const clearWorkouts = async () => {
  await removeItem("workout-data");
};
