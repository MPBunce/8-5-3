import { View, Text, Pressable, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type ParamList = {
  Accessory: {
    func: any;
    index: any;
    exercise: any;
  };
};

const EditAccessory = () => {

  const route = useRoute<RouteProp<ParamList, 'Accessory'>>();
  const { func, index, exercise } = route.params || {}; // Destructure the params object
  const [compoundSets, setCompoundSets] = useState<string[][]>([[]]);
  
  const navigation = useNavigation();

  const handleNumberChange = (text: string, setIndex: number, inputIndex: number) => {
    setCompoundSets(prevState => {
      const newState = [...prevState];
      newState[setIndex] = newState[setIndex] || [];
      newState[setIndex][inputIndex] = text;
      return newState;
    });
  };

  const handlePress = () => {
    setCompoundSets(prevState => [...prevState, []]);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={ ()=> console.log(compoundSets)} style={{paddingRight:'20px'}}>
          <Text>Save</Text>
        </TouchableOpacity>
      ),
    });
    //add date in here so that the button can access it
  }, [navigation, compoundSets ]);

  return (
    <ScrollView>
      <View>
        <Text>{index}</Text>
        <Text>{exercise}</Text>
      </View>

      <View>
        {compoundSets.map((set, setIndex) => (
          <View key={setIndex}>
            <Text>{`Set ${setIndex + 1}`}</Text>
            <TextInput
              value={set[0] || ''}
              onChangeText={text => handleNumberChange(text, setIndex, 0)}
              keyboardType="numeric"
              placeholder=""
            />
            <TextInput
              value={set[1] || ''}
              onChangeText={text => handleNumberChange(text, setIndex, 1)}
              keyboardType="numeric"
              placeholder=""
            />
          </View>
        ))}
      </View>

      <Pressable onPress={handlePress}>
        <Text>Add Input</Text>
      </Pressable>
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
