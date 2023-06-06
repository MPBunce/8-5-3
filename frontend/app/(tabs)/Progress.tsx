import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useRouter } from 'expo-router'

const Progress = () => {

  const router = useRouter();
  const {userInfo} = useSelector((state: any) => state.auth);


  useEffect( () => {
    if(userInfo === null){
      router.replace('')
    }
    console.log(userInfo)
  })

  return (
    <View>
      <Text>Progress</Text>
    </View>
  )
}

export default Progress