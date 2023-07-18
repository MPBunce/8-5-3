import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';

const About = () => {
  const openGitHubRepo = () => {
    // Add the logic to open the GitHub repository
  };

  const openWorkoutPDF = () => {
    // Add the logic to open the workout PDF
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        This fitness app is built to help you achieve your fitness goals. It
        provides a comprehensive fitness program based on open-source code. The
        app offers a range of workouts, exercises, and tracking features to
        assist you in your fitness journey. The open-source nature of the app
        means that you can explore the code, contribute to its development, and
        customize it according to your needs. Get started with the app and
        embark on your fitness transformation!
      </Text>

      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={openGitHubRepo} style={styles.iconButton}>
          <Feather name="github" size={24} color="black" />
          <Text style={styles.iconText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={openWorkoutPDF} style={styles.iconButton}>
          <Feather name="file-text" size={24} color="black" />
          <Text style={styles.iconText}>Workout PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default About;
