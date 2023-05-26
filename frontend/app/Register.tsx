import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { useState } from 'react';

const Register = () => {

    const [text, setText] = useState('');

    return (
        <View>

            <TextInput
                style={{height: 40, textAlign: 'center', marginTop: 200}}
                placeholder="Enter Your Name"
                onChangeText={newText => setText(newText)}
                defaultValue={text}  
            />
            <TextInput
            style={{height: 40, textAlign: 'center', marginTop: 20}}
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
        </View>
    )
}

export default Register