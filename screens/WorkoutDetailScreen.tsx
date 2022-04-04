import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Modal } from "../components/styled/Modal";
import { PressableText } from "../components/styled/PressableText";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { formatSec } from "../utils/time";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ route }: Navigation) => {
  const workout = useWorkoutBySlug(route.params.slug);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slug - {workout?.name}</Text>
      <Modal
        activator={({ handleOpen }) => (
          <PressableText text="Check Sequence" onPress={handleOpen} />
        )}
      >
        <View>
          {workout?.sequence.map((exercise, index) => (
            <Text key={index}>
              {exercise.name} | {exercise.type} | {formatSec(exercise.duration)}
            </Text>
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
