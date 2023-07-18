import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button} from 'react-native'
import React from 'react'
import { useGetWorkoutsMutation } from '../../../slices/workouts/workoutApiSlice'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ItemBox from '../../../components/ItemBox';
import { Link } from 'expo-router';

const Workouts = () => {

  const {userInfo} = useSelector((state: any) => state.auth);
  const [getWorkouts, {isLoading} ]= useGetWorkoutsMutation();

  const [myWorkouts, setMyWorkouts] = useState<any[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const workouts = await getWorkouts("").unwrap();
        setMyWorkouts(workouts)
             
      } catch (error) {
        console.log("error ")
        console.log(error)
      }
    };

    fetchWorkouts();
  },[]);

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