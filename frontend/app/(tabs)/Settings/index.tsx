import { View, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React, { useEffect } from 'react'

import { useLogoutMutation } from '../../../slices/usersApiSlice'
import { logout } from '../../../slices/authSlice'

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'expo-router'

const index = () => {

  const {userInfo} = useSelector((state: any) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();


  const submitLogout = async () => {

    try{
      const grabage: any = ""
      await logoutApiCall(grabage).unwrap();
      dispatch( logout(userInfo) );
    } catch (error ) {
      console.log(error)
    }
  }

  return (
    <View>
        
      <Link href="Settings/one">News 1</Link>
      <Link href="Settings/two">News 1</Link>
      <Link href="Settings/three">News 1</Link>

      <Pressable onPress={submitLogout}>
        <Text>Logout</Text>
      </Pressable>

    </View>
  )
}

export default index