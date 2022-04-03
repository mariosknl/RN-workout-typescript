import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, View } from "react-native";
import WorkoutItem from "../components/WorkoutItem";
import data from "../data.json";
import { Workout } from "../types/data";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
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
    padding: 20,
  },
});
