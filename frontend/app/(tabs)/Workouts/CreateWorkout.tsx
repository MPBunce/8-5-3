import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button, TouchableOpacity} from 'react-native'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useCreateWorkoutMutation } from '../../../slices/workouts/workoutApiSlice';
import { FontAwesome5 } from '@expo/vector-icons';
import { useDispatch} from 'react-redux';
import { createSliceWorkout } from '../../../slices/workouts/workoutApiSlice';


const CreateWorkout = () => {

  const navigation = useNavigation();
  const [createWorkout, {isLoading} ]= useCreateWorkoutMutation();

  const dispatch = useDispatch<any>(); 

  const [repRange, setRepRange] = useState('');
  const [compoundName, setcompoundName] = useState('');

  const compoundLifts = [
    {key:'1', value:'Squat'},
    {key:'2', value:'Bench'},
    {key:'3', value:'Deadlift'},
    {key:'4', value:'OHP'},
    {key:'5', value:'Dips'},
    {key:'6', value:'Pullups'},
    {key:'7', value:'Incline Press'},
  ]

  const [compoundSets, setcompoundSets] = useState(['', '', '']);
  const handleNumberChange = (text: any, index: any) => {
    // Validate input to allow only numbers
    const regex = /^[0-9]*$/;
    if (regex.test(text) || text === '') {
      const updatedSets = [...compoundSets];
      updatedSets[index] = text;
      setcompoundSets(updatedSets);
    }
    
  };

  const testSubmit = async () => {
    var data: any = {compoundName, repRange, compoundSets, accessoryExercises}
    console.log(data)
    try {

      const res = await createWorkout(data).unwrap();
      console.log("response:  " + res)
      await dispatch( createSliceWorkout(res) )

    } catch (error) {
      console.log(error)
    }
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'Workouts' as never}],
    });

  };

  //use this one
  const [accessoryExercises, setAccessoryExercises] = useState<Array<{
    exerciseName: string;
    setsAndReps: Array<{ weight?: number; reps?: number }>;
  }>>([]);
  
  const updateAccessoryExercisesName = (newName: string) => {
    console.log(newName)
    setAccessoryExercises(prevState => {
      const newExercises = [...prevState, { exerciseName: newName, setsAndReps: [] }];
      return newExercises;
    });
  };
  
  const updateAccessoryExerciseSnR = (index: number, inputArray: any) => {
    setAccessoryExercises(prevState => {
      const newExercises = [...prevState];
      const updatedExercise = { ...newExercises[index] };
  
      const updatedSetsAndReps = inputArray.map((setAndRep: any) => ({
        weight: setAndRep[0],
        reps: setAndRep[1],
      }));
  
      updatedExercise.setsAndReps = updatedSetsAndReps;
  
      newExercises[index] = updatedExercise;
      return newExercises;
    });
  };
  

  const addAccessory = () => {
    navigation.navigate('AddAccessory', { function: updateAccessoryExercisesName } as any);
  }

  const editAccessory = (index: any, exercise: any) => {
    console.log(index, exercise)
    navigation.navigate('EditAccessory', { function: updateAccessoryExerciseSnR, index: index, exercise: exercise } as any);    
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={testSubmit} style={{paddingRight:'20px'}}>
          <Text>Save</Text>
        </TouchableOpacity>
      ),
    });
    //add date in here so that the button can access it
  }, [navigation, compoundName, repRange, compoundSets, accessoryExercises ]);

  return (
    <ScrollView style={styles.margin}>

      <SelectList 
        setSelected={setcompoundName} 
        data={compoundLifts} 
        save="value"       
        placeholder="Select a compound lift"
      />

      <View style={styles.container}>

        <TouchableOpacity
          style={[
            styles.button,
            repRange === '8' && styles.selectedButton,
          ]}
          onPress={() => 
            setRepRange('8')
          }
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.button,
            repRange === '5' && styles.selectedButton,
          ]}
          onPress={() => setRepRange('5')}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            repRange === '3' && styles.selectedButton,
          ]}
          onPress={() => setRepRange('3')}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            repRange === '1' && styles.selectedButton,
          ]}
          onPress={() => setRepRange('1')}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
      </View>
    
      <View style={styles.containerTwo}>
        {compoundSets.map((value, index) => (
          <View key={index} style={styles.setContainer}>
            <Text style={styles.label}>{`Set ${index + 1}`}</Text>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={(text) => handleNumberChange(text, index)}
              keyboardType="numeric"
              placeholder=""
            />
          </View>
        ))}
      </View>

      <View style={styles.row}>
        <Text >Accessory Movements</Text>
        <Pressable onPress={ addAccessory } style={styles.buttonAcc}>
          <FontAwesome5 name="plus" size={20} color={'black'}/>
        </Pressable>
      </View>

      <View >
        {accessoryExercises.map((exercise, index) => (
          <TouchableOpacity
            key={index}

            onPress={() => {editAccessory(index, exercise)} }
          >
            <Text>{index} {exercise.exerciseName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Pressable onPress={() => console.log(accessoryExercises)}><Text>nice</Text></Pressable>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  margin:{
    margin: '10px'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 60,
    height: 60,
    backgroundColor: '#DDDDDD',
  },
  selectedButton: {
    backgroundColor: '#FF0000',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerTwo: {
    marginVertical: 10,
  },
  setContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  buttonAcc: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 20,
    height: 20,
  },
  accContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  accExerciseButton: {
    width: '100%',
    height: 40, // Adjust the height to make the rows thicker
  },
  accExerciseButtonText: {
    fontSize: 16,
  },

});

export default CreateWorkout;