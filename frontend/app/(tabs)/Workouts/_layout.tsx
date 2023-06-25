import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useSelector } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';


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
              <TouchableOpacity onPress={() => navigation.navigate('CreateWorkout')}>
                  <FontAwesome5 name="plus" size={25}/>
              </TouchableOpacity>
          ),   
      }}/>
      <Stack.Screen name='CreateWorkout' options={{
          headerTitle: 'CreateWorkout',
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity onPress={ console.log("test") }>
              <Text>save</Text>
               {/* <FontAwesome5 name="plus" size={25}/> */}
            </TouchableOpacity>
        ),  
      }}/>

    </Stack>
  )
}

export default StackLayout