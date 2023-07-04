import { View, Text } from 'react-native';
import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';

// Define the ParamList 
type ParamList = {
  EditWorkout: {
    workoutId: string;
  };
};

const EditWorkout = () => {
  const route = useRoute<RouteProp<ParamList, 'EditWorkout'>>();
  const workoutId: any = route.params?.workoutId;

  return (
    <View>
      <Text>EditWorkout - Workout ID: {workoutId}</Text>
    </View>
  );
};

export default EditWorkout;
