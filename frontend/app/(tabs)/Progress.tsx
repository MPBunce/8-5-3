import { View, Text, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetWorkoutsMutation } from '../../slices/workouts/workoutApiSlice';
import ItemBox from '../../components/ItemBox';
import ChartBox from '../../components/ChartBox';
import { ScrollView } from 'react-native-gesture-handler';

const Progress = () => {
  const [getWorkouts, { isLoading }] = useGetWorkoutsMutation();
  const [myWorkouts, setMyWorkouts] = useState<any[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workouts = await getWorkouts('').unwrap();
        setMyWorkouts(workouts);
      } catch (error) {
        console.log('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  },[]);

  const sortedWorkouts = myWorkouts.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  const groupedWorkouts: any = {};
  sortedWorkouts.forEach( (workout: any) => {
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