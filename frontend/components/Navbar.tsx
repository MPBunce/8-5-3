import React from 'react';
import { View, TouchableOpacity, StyleSheet, } from 'react-native';
import { Link } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';

const NavBar = () => {

  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.tab}>

            <Link href={'/Register'}>
                <Ionicons name='md-checkmark-circle' size={32} color="white" />
            </Link>
        
        </TouchableOpacity>

        <TouchableOpacity  style={styles.tab}>
            <Link href={'/Login'}>
                <Ionicons name='md-checkmark-circle' size={32} color="white" />
            </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
            <Link href={'/'}>
                <Ionicons name='md-checkmark-circle' size={32} color="white" />
            </Link>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80, // Adjust the height as desired
    backgroundColor: 'black',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: 'white',
  },
});

export default NavBar;
