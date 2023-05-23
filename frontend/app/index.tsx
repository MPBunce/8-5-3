import { View, Text, Dimensions, ScrollView, StyleSheet, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {

  return (
    <View style={styles.scrollView}>

        
        <Link href={'/Login'}>inedx</Link>

    </View>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'green',
        paddingTop: 200,
    },
});

export default index;