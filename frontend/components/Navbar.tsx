import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const NavBar = () => {
  const handleTabPress = (tab: any) => {
    // Handle tab press event here
    console.log(`Pressed ${tab}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleTabPress('Home')} style={styles.tab}>
        {/* Render your Home tab icon here */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Search')} style={styles.tab}>
        {/* Render your Search tab icon here */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Profile')} style={styles.tab}>
        {/* Render your Profile tab icon here */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 120, // Adjust the height as desired
    backgroundColor: 'lightgray',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NavBar;
