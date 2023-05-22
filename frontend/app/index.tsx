import { View, Text, Dimensions, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import NavBar from '../components/Navbar'

const About = () => {

    const screenHeight = Dimensions.get('window').height;
    const scrollViewHeight = screenHeight * 0.85;

  return (
    <View>
        <ScrollView style={[styles.scrollView, { height: scrollViewHeight }]}>
            <Text>About here</Text>
        </ScrollView>

        <NavBar/>

    </View>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'green'
    },
});

export default About;