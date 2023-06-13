import { View, Text, Pressable, StyleSheet } from 'react-native'
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
    <View style={styles.center}>
        
      <Link href="Settings/one">News 1</Link>
      <Link href="Settings/two">News 1</Link>
      <Link href="Settings/three">News 1</Link>


      <Link href="Settings/UpdateProfile">Update Profile</Link>

      <Pressable onPress={submitLogout} style={styles.button}>
        <Text>Logout</Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default index