import { View, Text, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetWorkoutsMutation } from '../../slices/workouts/workoutApiSlice';
import ItemBox from '../../components/ItemBox';
import ChartBox from '../../components/ChartBox';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { AsyncLocalStorage } from 'async_hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Progress = () => {

  const [myWorkouts, setMyWorkouts] = useState<any[]>([]);
  const { userWorkouts } = useSelector((state: any) => state.workouts);

  useEffect(() => {

    setMyWorkouts(userWorkouts);

  }, [userWorkouts]);


  const groupedWorkouts: any = {};
  myWorkouts?.forEach( (workout: any) => {
    var {compoundName, repRange, compoundSets, createdAt} = workout
    const key = `${compoundName} ${repRange}s`;
    if (!groupedWorkouts[key]) {
      // If the key doesn't exist, create a new array for the group
      groupedWorkouts[key] = [];
    }
    const name = key
    const maxSet = Math.max(...compoundSets)
    groupedWorkouts[key].push([name, maxSet, createdAt]);
  })

  const groupedWorkoutsArray = Object.values(groupedWorkouts);

  return (
    <ScrollView>
      <View>

        {groupedWorkoutsArray.map((group:any, index: number) => (
          <View key={index}>
            {/* <Text>{`Group ${index + 1}`}</Text> */}
            <ChartBox workouts={group} />   

          </View>

        ))}
  
      </View>
    </ScrollView>
  );
};

export default Progress;