import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useRouter } from 'expo-router'

const one = () => {
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
      <Text>one</Text>
    </View>
  )
}

export default one