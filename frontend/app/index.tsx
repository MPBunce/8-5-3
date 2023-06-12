import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { useSelector } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const index = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [login, {isLoading}] = useLoginMutation();
  const {userInfo} = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation.navigate('(tabs)' as never);
    }
  });

  const submitLogin = async (e: any) => {
    e.preventDefault();
    const loginData = {email, password};
    try {
      const loginResult = await login(loginData).unwrap();
      dispatch(setCredentials(loginResult))
    } catch (error: any) {
      console.log(error?.data?.message || error.error)
    }
  };

  return (

    //Add touchable to close input forms

    <View style={styles.center}>

      <TextInput
        style={{width: "90%", height: 40, textAlign: 'center', marginTop: 150, borderColor: "black", borderWidth: 1, borderRadius: 10,}}
        placeholder="Enter Your Email"
        onChangeText={ (e: any) => setEmail(e)}
        value={email}  
      />
      <TextInput
        style={{width: "90%", height: 40, textAlign: 'center', marginTop: 30, borderColor: "black", borderWidth: 1, borderRadius: 10,}}
        placeholder="Enter Your Password"
        onChangeText={ (e: any) => setPassword(e)}
        value={password}  
      />

      <Pressable style={styles.button} onPress={submitLogin}>
        <Text style={styles.text}>Login</Text>
      </Pressable>

      <Link style={{marginTop: 250}} href={'/Register'} asChild>
        <Pressable><Text>Create An Account</Text></Pressable>
      </Link>

      <Link style={{marginTop: 20}} href={'/About'} asChild>
        <Pressable><Text>About</Text></Pressable>
      </Link>

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

export default index;