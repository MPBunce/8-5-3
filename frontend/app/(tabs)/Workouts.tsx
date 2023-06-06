import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

const Workouts = () => {
  const router = useRouter();
  const {userInfo} = useSelector((state: any) => state.auth);

  useEffect( () => {
    if(userInfo === null){
      router.back();
    }
    console.log(userInfo)
  })

  return (
    <View>
      <Text>Workouts</Text>
    </View>
  )
}

export default Workouts