import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

const WorkoutDetailScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Detail</Text>
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
