import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button} from 'react-native'
import React from 'react'
import { useGetWorkoutsMutation } from '../../../slices/workouts/workoutApiSlice'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ItemBox from '../../../components/ItemBox';
import { useDispatch} from 'react-redux';
import { setSliceWorkouts } from '../../../slices/workouts/workoutApiSlice';

const Workouts = () => {

  const {userWorkouts} = useSelector((state: any) => state.workouts);
  const [myWorkouts, setMyWorkouts] = useState<any[]>([]);

  useEffect(() => {
    setMyWorkouts(userWorkouts);
  },[userWorkouts]);

  const sortedWorkouts = myWorkouts.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });


  return (    
    <ScrollView>
      <View>


        {sortedWorkouts.map((item: any, index: any) => (
          <View key={index}>
          
            <Pressable>
            
              <ItemBox workout={item}/>
        
            </Pressable>
            
          </View>
        ))}

      </View>
    </ScrollView>
  )

}


export default Workouts