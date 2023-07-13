import { View, Text, Pressable, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
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
  const updateAccessoryExerciseSnR: any = route.params?.function ;
  const index: any = route.params?.index ;
  const exercise: any = route.params?.exercise ;

  const [compoundSets, setCompoundSets] = useState<string[][]>([]);

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

  const update = (index: number,  setsAndReps: any) => {
    console.log(index, setsAndReps)
    updateAccessoryExerciseSnR(index,  setsAndReps);
    navigation.goBack();
  };


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={ () => {update(index, compoundSets)} } style={{paddingRight:'20px'}}>
          <Text>Save</Text>
        </TouchableOpacity>
      ),
    });
    //add date in here so that the button can access it
  }, [navigation, index, exercise, compoundSets, updateAccessoryExerciseSnR, update ]);

  return (
    <ScrollView>
      <View>
        <Text>{index}</Text>
        <Text>{exercise.exerciseName}</Text>
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
