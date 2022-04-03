import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View } from "react-native";
import WorkoutItem from "../components/WorkoutItem";
import data from "../data.json";
import { Workout } from "../types/data";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={data as Workout[]}
        keyExtractor={(item) => item.slug}
        renderItem={WorkoutItem}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    fontFamily: "montserrat-bold",
  },
});
