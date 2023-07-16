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

  const [compoundSets, setCompoundSets] = useState<string[][]>(
    exercise.setsAndReps.map((setAndRep: any) => [setAndRep.weight.toString(), setAndRep.reps.toString()]) || []
  );

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

  const handleDeleteSet = (setIndex: number) => {
    setCompoundSets(prevState => prevState.filter((_, index) => index !== setIndex));
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
      <View style={styles.container}>
        <Text style={styles.exerciseName}>{exercise.exerciseName}</Text>
        <Pressable onPress={handlePress} style={styles.addButton}>
          <Text style={styles.buttonText}>Add Input</Text>
        </Pressable>
      </View>

      <View>
        {compoundSets.map((set, setIndex) => (
          <View key={setIndex} style={styles.setContainer}>
            <Text style={styles.setNumber}>{`Set ${setIndex + 1}`}</Text>

            <View style={styles.labelContainer}>
              <Text style={styles.label}>Weight</Text>
              <Text style={styles.label}>Reps</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>lbs</Text>
              <TextInput
                value={set[0] || ''}
                onChangeText={text => handleNumberChange(text, setIndex, 0)}
                keyboardType="numeric"
                style={styles.input}
                placeholder=""
              />
              <Text style={styles.inputLabel}>reps</Text>
              <TextInput
                value={set[1] || ''}
                onChangeText={text => handleNumberChange(text, setIndex, 1)}
                keyboardType="numeric"
                style={styles.input}
                placeholder=""
              />

              <TouchableOpacity
                onPress={() => handleDeleteSet(setIndex)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>

            </View>
          </View>
        ))}
      </View>

      <Pressable onPress={() => console.log(exercise.setsAndReps)} style={styles.button}>
        <Text style={styles.buttonText}>Nice</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  exerciseName: {
    flex: 1,
  },
  addButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  setContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  setNumber: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    marginRight: 10,
  },
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    padding: 5,
  },
  deleteButton: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
});

export default EditAccessory;
