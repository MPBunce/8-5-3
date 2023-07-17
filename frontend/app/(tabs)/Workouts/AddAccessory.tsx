import { View, Text, Pressable, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type ParamList = {
  Accessory: {
    function: any;
  };
};

const AddAccessory = () => {

  const exerciseData = {
    Chest: ['Dumbell Bench', 'Incline Dumbell Bench', 'Push Ups', 'Dips', 'Chest Flys'],
    Shoulders: ['Shoulder Press', 'Lateral Raises', 'Front Raises', 'Rear Delt Flys'],
    Back: ['Barbell Row', 'Cable Row', 'Dumbell Row', 'Lat Pull Down', 'Pull Ups', 'Chin Ups'],
    Biceps: ['Barbell Curl', 'Dumbbell Curl', 'Cable Curls'],
    Triceps: ['Tricep Pushdown', 'Tricep Extension', 'Skull Crushers'],
    Legs: ['Front Squat', 'Romanian Deadlift', 'Leg Press', 'Hack Squat', 'Leg Extensions', 'Leg Curl', 'Bulgarian Split Squat', 'Glute Bridge'],
    Abs: ['Crunches', 'Hanging Leg Raises', 'Planks'],
    Calfs: ['Seated Calf Raises', 'Standing Calf Raises'],
    // Add more muscle groups and exercises as needed
  };

  const route = useRoute<RouteProp<ParamList, 'Accessory'>>();
  const updateAccessoryExercisesName = route.params?.function ;
  const navigation = useNavigation();
  
  const handlePress = (input: any) => {
    // Call the function from the route params
    console.log("Handle Press")
    updateAccessoryExercisesName(input)
    console.log(input)
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.entries(exerciseData).map(([muscleGroup, exercises]) => (
          <View key={muscleGroup} style={styles.muscleGroupContainer}>
            <Text style={styles.muscleGroupText}>{muscleGroup}</Text>
            {exercises.map((exercise) => (
              <TouchableOpacity
                key={exercise}
                style={styles.exerciseButton}
                onPress={() => handlePress(exercise)}
              >
                <Text style={styles.exerciseButtonText}>{exercise}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  muscleGroupContainer: {
    marginBottom: 16,
  },
  muscleGroupText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  exerciseButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  exerciseButtonText: {
    fontSize: 16,
  },
});

export default AddAccessory;