import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View } from "react-native";
import data from "../data.json";
import { Workout } from "../types/data";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  const renderItem = ({ item }: { item: Workout }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.difficulty}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data as Array<Workout>}
        keyExtractor={(item) => item.slug}
        renderItem={renderItem}
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
