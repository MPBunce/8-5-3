import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

import NavBar from '../components/Navbar'

const Login = () => {

    const screenHeight = Dimensions.get('window').height;
    const scrollViewHeight = screenHeight * 0.85;

    return (
        <View>
            <ScrollView style={[styles.scrollView, { height: scrollViewHeight }]}>
                <Text>login</Text>
            </ScrollView>
            
            <NavBar />
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'red'
    },
});

export default Login;