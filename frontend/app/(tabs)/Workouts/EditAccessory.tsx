import { View, Text, Pressable, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type ParamList = {
    Accessory: {
      function: any;
      index: any;
      exercise: any;
    };
};

const EditAccessory = () => {

    const route = useRoute<RouteProp<ParamList, 'Accessory'>>();
    const { function: test, index, exercise } = route.params || {}; // Destructure the params object
  
    const navigation = useNavigation();
    
    const handlePress = (input: any) => {
      console.log(input);
      navigation.goBack();
    };

  return (
    <ScrollView>
      <View>
        <Text>{index}</Text>
        <Text>{exercise}</Text>
      </View>

      <View style={styles.row}>
        <Text >Accessory Movements</Text>
        <Pressable onPress={ addAccessory } style={styles.buttonAcc}>
          <FontAwesome5 name="plus" size={20} color={'black'}/>
        </Pressable>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  muscleGroupContainer: {
    marginBottom: 16,
  },
  muscleGroupText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  exerciseButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
  exerciseButtonText: {
    fontSize: 16,
  },
});

export default EditAccessory;