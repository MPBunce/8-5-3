import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button, TouchableOpacity} from 'react-native'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useCreateWorkoutMutation } from '../../../slices/workouts/workoutApiSlice';

const CreateWorkout = () => {

  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={testSubmit} style={{paddingRight:'20px'}}>
          <Text>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [createWorkout, {isLoading} ]= useCreateWorkoutMutation();

  const testSubmit = async () => {
    var data: any = {selectedCompound, repRange, sets}
    console.log(selectedCompound, repRange, sets)
    console.log("test")
    console.log(data)
    try {
      createWorkout(data)
    } catch (error) {
      console.log(error)
    }
  };

  // useEffect(() => {
  //   console.log("Selected value:", repRange);
  //   console.log("Selected compound:", selectedCompound);
  //   console.log("Sets:", sets);
  // });

  const [repRange, setRepRange] = useState('');
  const [ selectedCompound, setSelectedCompound] = useState('');

  const compoundLifts = [
    {key:'1', value:'Squat'},
    {key:'2', value:'Bench'},
    {key:'3', value:'Deadlift'},
    {key:'4', value:'OHP'},
    {key:'5', value:'Dips'},
    {key:'6', value:'Pullups'},
    {key:'7', value:'Incline Press'},
  ]

  const [sets, setSets] = useState(['', '', '']);
  const handleNumberChange = (text: any, index: any) => {
    // Validate input to allow only numbers
    const regex = /^[0-9]*$/;
    if (regex.test(text) || text === '') {
      const updatedSets = [...sets];
      updatedSets[index] = text;
      setSets(updatedSets);
    }
    
  };

  return (
    <ScrollView style={styles.margin}>

      <SelectList 
        setSelected={setSelectedCompound} 
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
        {sets.map((value, index) => (
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

      <Text>Accessory {repRange} {selectedCompound} {sets}</Text>

      <TouchableOpacity><Text>bruh </Text></TouchableOpacity>

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
});

export default CreateWorkout;
