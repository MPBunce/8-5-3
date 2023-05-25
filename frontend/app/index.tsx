import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {

  return (
    <View style={styles.scrollView}>

        
      <Link href={'/Register'} asChild>
        <Pressable><Text>Go To Register</Text></Pressable>
      </Link>

      <Link href={'/Progress'} asChild>
        <Pressable><Text>Go To Nested Index</Text></Pressable>
      </Link>

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