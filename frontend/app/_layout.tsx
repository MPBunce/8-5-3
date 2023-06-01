import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'
import store from '../store'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'

const StackLayout = () => {

  const router = useRouter();

  return (

    <Provider store={store}>

      {/* <NavigationContainer > */}
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
      {/* </NavigationContainer> */}

    </Provider>

  )
}

export default StackLayout