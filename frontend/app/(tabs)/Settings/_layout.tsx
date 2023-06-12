import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useSelector } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

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
          headerTitle: 'Settings',
          headerShown: true,
          headerLeft: () => null,
      }}/>
      <Stack.Screen name='one' options={{
          headerTitle: 'one',
          headerShown: true
      }}/>
      <Stack.Screen name='two' options={{
          headerTitle: 'two',
          headerShown: true,
      }}/>
      <Stack.Screen name='three' options={{
          headerTitle: 'three',
          headerShown: true,
      }}/>

    </Stack>
  )
}

export default StackLayout