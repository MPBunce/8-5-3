import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Workouts = () => {

  const navigation = useNavigation();
  const {userInfo} = useSelector((state: any) => state.auth);
  const myRoute: any = [{ name: 'index' }];

  useFocusEffect(() => {
    if (userInfo === null) {
      navigation.reset({
        index: 0,
        routes:  myRoute,
      });
    }
  });

  return (
    <View>
      <Text>Workouts</Text>
    </View>
  )
}

export default Workouts