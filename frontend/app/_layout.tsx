import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'
import store from '../store'
import { Provider } from 'react-redux';

const StackLayout = () => {

  const router = useRouter();

  return (


    <Stack>

      <Stack.Screen name='index' options={{
          headerTitle: 'Login',
          headerShown: true
      }}/>
      <Stack.Screen name='Register' options={{
          headerTitle: 'Register',
          headerShown: true,
      }}/>

      <Stack.Screen name='About' options={{ presentation: 'modal'}}/>

      <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>


    </Stack>




  )
}

export default StackLayout