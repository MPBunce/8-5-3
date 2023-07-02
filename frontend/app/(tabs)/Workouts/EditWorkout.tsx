import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const EditWorkout = () => {
  const route = useRoute();
  const workoutId = route.params.workoutId;

  return (
    <View>
      <Text>EditWorkout - Workout ID: {workoutId}</Text>
    </View>
  );
};

export default EditWorkout;
