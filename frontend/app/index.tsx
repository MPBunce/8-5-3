import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const index = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail('')
    setPassword('')
  }

  return (

    //<Provider store={store}>

      <View style={styles.center}>


        <TextInput
          style={{height: 40, textAlign: 'center', marginTop: 150, width: 100}}
          placeholder="Enter Your Email"
          onChangeText={ (e) => setEmail(e)}
          value={email}  
        />
        <TextInput
          style={{height: 40, textAlign: 'center', marginTop: 20}}
          placeholder="Enter Your Password"
          onChangeText={ (e) => setPassword(e)}
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

    //</Provider>

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