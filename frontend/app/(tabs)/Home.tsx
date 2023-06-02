import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

const HomePage = () => {

  const {userInfo} = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect( () => {
    if(userInfo === null){
      router.push('Home')   
    }
  }, [userInfo] );

  return (
    <View>
      <Text>HomePage</Text>
    </View>
  )
}

export default HomePage