import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button} from 'react-native'
import React from 'react'
import { useGetWorkoutsMutation } from '../../../slices/workouts/workoutApiSlice'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Workouts = () => {

  const [values, setValues] = useState<any[]>([]);

  const {userInfo} = useSelector((state: any) => state.auth);
  const [getWorkouts, {isLoading} ]= useGetWorkoutsMutation();



  const getUsersWorkouts = async () =>{ 
    
    const grabage: any = ""

    console.log("staring")

    try {
      console.log("test ")
      const workouts = await getWorkouts(grabage).unwrap();
      console.log(workouts)   
      setValues(workouts);
           
    } catch (error) {
      console.log("error ")
      console.log(error)
    }


  }

  return (
    <View>

      <Pressable style={styles.button} onPress={getUsersWorkouts}>
        <Text style={styles.text}>Click to get workouts</Text>
      </Pressable>

      {values.map((item: any, index: any) => (
        <View key={index}>
          <Text>Compound Name: {item.compoundName}</Text>
          <Text>Compound Sets: {item.repRange}</Text>
        </View>
      ))}


    </View>
  )

}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Workouts