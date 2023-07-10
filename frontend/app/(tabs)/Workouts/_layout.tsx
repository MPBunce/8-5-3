import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useRef} from 'react'
import { Stack } from 'expo-router'
import { useSelector } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';
import CreateWorkout from './CreateWorkout';


const StackLayout = () => {

  const navigation = useNavigation();
  const {userInfo} = useSelector((state: any) => state.auth);
  const myRoute: any = [{ name: 'index' }];

  useFocusEffect(() => {
    if (userInfo === null) {
      navigation.reset({
        index: 0,
        routes: myRoute,
      });
    }
  });

  return (
    <Stack>
      <Stack.Screen name='index' options={{
          headerTitle: 'Workouts',
          headerShown: true,
          headerLeft: () => null,
          headerRight: () => (
              <TouchableOpacity style={{paddingRight:'20px'}} onPress={() => navigation.navigate('CreateWorkout' as never)}>
                  <FontAwesome5 name="plus" size={25}/>
              </TouchableOpacity>
          ),   
      }}/>

      <Stack.Screen
        name='CreateWorkout'
        options={{
          headerTitle: 'CreateWorkout',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name='EditWorkout'
        options={{
          headerTitle: 'EditWorkout',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name='AddAccessory'
        options={{
          headerTitle: 'AddAccessory',
          headerShown: true,
        }}
      />

    </Stack>
  )
}

export default StackLayout