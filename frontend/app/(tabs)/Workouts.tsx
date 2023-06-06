import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Workouts = () => {

  //const userInfo = await AsyncStorage.getItem('userInfo');



  return (
    <View>
      <Text>Workouts</Text>
    </View>
  )
}

export default Workouts