import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";

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
