import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getWorkoutBySlug } from "../storage/workout";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

const WorkoutDetailScreen = ({ route }: Navigation) => {
  useEffect(() => {
    async function getData() {
      const workout = await getWorkoutBySlug(route.params.slug);
    }

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slug - {route.params.slug}</Text>
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
