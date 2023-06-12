import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button} from 'react-native'
import React, {useState}  from 'react';
import { Link } from 'expo-router';


const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');  

  const submitLogin = (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    setEmail('')
    setPassword('')
    setName('')
  }

  return (
    <View style={styles.center}>

      <TextInput
          style={{height: 40, textAlign: 'center', marginTop: 150}}
          placeholder="Enter Your Name"
          onChangeText={ (e: any) => setName(e)}
          value={name}  
      />
      <TextInput
          style={{height: 40, textAlign: 'center', marginTop: 20}}
          placeholder="Enter Your Email"
          onChangeText={ (e: any) => setEmail(e)}
          value={email}  
      />
      <TextInput
          style={{height: 40, textAlign: 'center', marginTop: 20}}
          placeholder="Enter Your Password"
          onChangeText={ (e: any) => setPassword(e)}
          value={password}  
      />
      <TextInput
          style={{height: 40, textAlign: 'center', marginTop: 20}}
          placeholder="Confirm Your Password"
          onChangeText={ (e: any) => setPasswordCheck(e)}
          value={passwordCheck}  
      />

      
      <Pressable style={styles.button} onPress={submitLogin}>
          <Text style={styles.text}>Register</Text>
      </Pressable>

    </View>
    
  )
};

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

export default Register