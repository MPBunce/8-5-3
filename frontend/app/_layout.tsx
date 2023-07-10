import { View, Text, Button } from 'react-native'
import React, {useEffect} from 'react'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'
import store from '../store'
import { Provider, useSelector } from 'react-redux';


const StackLayout = () => {

  return (

    <Provider store={store}>
      
      
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


    </Provider>

  )
}

export default StackLayout