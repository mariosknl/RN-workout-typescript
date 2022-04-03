import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View>
      <Text>PlannerScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default PlannerScreen;

const styles = StyleSheet.create({});
