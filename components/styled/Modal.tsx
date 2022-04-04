import { FunctionComponent, useState } from "react";
import { Modal as DefaultModal, StyleSheet, View } from "react-native";
import { PressableText } from "./PressableText";

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: React.ReactNode;
};

export function Modal({ activator: Activator, children }: ModalProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View>
      <DefaultModal visible={isModalVisible} animationType="slide">
        <View style={styles.centeredView}>
          {children}
          <PressableText
            text="Close"
            onPress={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setIsModalVisible(true)} />
      ) : (
        <PressableText
          text="Open"
          onPress={() => {
            setIsModalVisible(true);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
