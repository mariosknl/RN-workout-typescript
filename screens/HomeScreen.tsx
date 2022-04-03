import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Planner"
        onPress={() => {
          navigation.navigate("Planner");
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
