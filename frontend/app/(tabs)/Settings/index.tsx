import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useRouter } from 'expo-router'

const index = () => {


  return (
    <View>
        
      <Link href="Settings/one">News 1</Link>
      <Link href="Settings/two">News 1</Link>
      <Link href="Settings/three">News 1</Link>

    </View>
  )
}

export default index