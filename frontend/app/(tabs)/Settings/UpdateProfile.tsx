import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button} from 'react-native'
import React, { useState } from 'react'
import { useUpdateUserMutation } from '../../../slices/usersApiSlice'
import { logout, setCredentials } from '../../../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'


const UpdateProfile = () => {

  const {userInfo} = useSelector((state: any) => state.auth);
  const [updateUserApiCall] = useUpdateUserMutation();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

    const submitUpdate = async () => {

        const updatedProfile = {name, email, password};

        try {
            if (password !== passwordConfirm){
                return;
            } else{
                const res = await updateUserApiCall(updatedProfile).unwrap();
                dispatch( setCredentials(res) )
            }
        } catch (error ) {
            console.log(error)
        }

        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    }

  return (
    <View style={styles.center}>
        
        <TextInput
            style={{width: "90%", height: 40, textAlign: 'center', marginTop: 150, borderColor: "black", borderWidth: 1, borderRadius: 10,}}
            placeholder="Update Your Name"
            onChangeText={ (e: any) => setName(e)}
            value={name}  
        />
        <TextInput
            style={{width: "90%", height: 40, textAlign: 'center', marginTop: 50, borderColor: "black", borderWidth: 1, borderRadius: 10,}}
            placeholder="Update Your Email"
            onChangeText={ (e: any) => setEmail(e)}
            value={email}  
        />
        <TextInput
            style={{width: "90%", height: 40, textAlign: 'center', marginTop: 50, borderColor: "black", borderWidth: 1, borderRadius: 10,}}
            placeholder="Update Your Password"
            onChangeText={ (e: any) => setPassword(e)}
            value={password}  
        />
        <TextInput
            style={{width: "90%", height: 40, textAlign: 'center', marginTop: 50, borderColor: "black", borderWidth: 1, borderRadius: 10,}}
            placeholder="Confirm Password"
            onChangeText={ (e: any) => setPasswordConfirm(e)}
            value={passwordConfirm}  
        />

        <Pressable style={styles.button} onPress={submitUpdate}>
            <Text style={styles.text}>Update User Info</Text>
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

export default UpdateProfile;