import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useRouter } from 'expo-router'

const index = () => {

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
        
      <Link href="list/one">News 1</Link>
      <Link href="list/two">News 1</Link>
      <Link href="list/three">News 1</Link>

    </View>
  )
}

export default index