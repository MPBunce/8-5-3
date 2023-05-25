import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View>
        
      <Link href="list/one">News 1</Link>
      <Link href="list/two">News 1</Link>
      <Link href="list/three">News 1</Link>

    </View>
  )
}

export default index