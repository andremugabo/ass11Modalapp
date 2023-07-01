import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Animated } from "react-native";

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fadeAnimation] = useState(new Animated.Value(0));

  // Function to handle showing the modal
  const showModal = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setModalVisible(true);
  };

  // Function to handle hiding the modal
  const hideModal = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showModal} style={styles.openButton}>
        <Text style={styles.openButtonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <Animated.View
            style={[styles.modalContent, { opacity: fadeAnimation }]}
          >
            {/* Modal content goes here */}
            <Text style={styles.modalText}>This is a modal dialog.</Text>

            <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  openButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
    marginHorizontal: 40,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: "#DDDDDD",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  closeButtonText: {
    fontSize: 16,
  },
};

export default CustomModal;
