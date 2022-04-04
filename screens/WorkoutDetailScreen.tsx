import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { PressableText } from "../components/styled/PressableText";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const workout = useWorkoutBySlug(route.params.slug);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Slug - {workout?.name}</Text>
      <PressableText
        text="Check Sequence"
        onPress={() => {
          setIsModalVisible(true);
        }}
      />
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.centeredView}>
          <Text>Hello There!</Text>
          <PressableText
            text="Close"
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
