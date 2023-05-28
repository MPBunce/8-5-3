import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { useState } from 'react';

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
    <View style={styles.center}>


      <TextInput
        style={{height: 40, textAlign: 'center', marginTop: 150}}
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

      <Button
        onPress={submitLogin}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

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
});

export default index;