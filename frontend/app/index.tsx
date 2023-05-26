import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput,} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { useState } from 'react';

const index = () => {

  const [text, setText] = useState('');

  return (
    <View style={styles.center}>


      <TextInput
        style={{height: 40, textAlign: 'center', marginTop: 150}}
        placeholder="Enter Your Email"
        onChangeText={newText => setText(newText)}
        defaultValue={text}  
      />
      <TextInput
        style={{height: 40, textAlign: 'center', marginTop: 20}}
        placeholder="Enter Your Password"
        onChangeText={newText => setText(newText)}
        defaultValue={text}  
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