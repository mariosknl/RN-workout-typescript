import { FontAwesome } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Modal } from "../components/styled/Modal";
import { PressableText } from "../components/styled/PressableText";
import WorkoutItem from "../components/WorkoutItem";
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
      <WorkoutItem item={workout} childStyles={{ marginTop: 10 }}>
        <Modal
          activator={({ handleOpen }) => (
            <PressableText text="Check Sequence" onPress={handleOpen} />
          )}
        >
          <View>
            {workout?.sequence.map((exercise, index) => (
              <View key={index} style={styles.sequenceItem}>
                <Text>
                  {exercise.name} | {exercise.type} |{" "}
                  {formatSec(exercise.duration)}
                </Text>
                {index !== workout.sequence.length - 1 && (
                  <FontAwesome name="arrow-down" size={20} />
                )}
              </View>
            ))}
          </View>
        </Modal>
      </WorkoutItem>
      <View>
        <FontAwesome name="play-circle-o" size={100} />
      </View>
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
  sequenceItem: {
    alignItems: "center",
  },
});
