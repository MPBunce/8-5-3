import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import NavBar from '../components/Navbar'

const Register = () => {

    const screenHeight = Dimensions.get('window').height;
    const scrollViewHeight = screenHeight * 0.90;

    return (
        <View>
            <ScrollView style={[styles.scrollView, { height: scrollViewHeight }]}>
                <Text>Register</Text>
            </ScrollView>

            <NavBar/>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'blue'
    },
});

export default Register;