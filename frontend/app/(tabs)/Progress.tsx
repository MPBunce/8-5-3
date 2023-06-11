import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Progress = () => {

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
      <Text>Progress</Text>
    </View>
  )
}

export default Progress