import { View, Text, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';

// Define the ParamList 
type ParamList = {
  EditWorkout: {
    workout: any;
  };
};

const EditWorkout = () => {

  const navigation = useNavigation();
  const [editMode, setEditMode] = useState(false);
  const route = useRoute<RouteProp<ParamList, 'EditWorkout'>>();
  const workout: any = route.params?.workout;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={editMode ? handleSave : handleEdit}
          style={{ paddingRight: 20 }}
        >
          <Text>{editMode ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, editMode]);

  const handleSave = () => {
    // Logic for saving the changes
    console.log('Save button pressed');
    setEditMode(!editMode)
  };

  const handleEdit = () => {
    // Logic for editing the workout
    console.log('Edit button pressed');
    setEditMode(!editMode)
  };


  const [repRange, setRepRange] = useState(workout.repRange);
  const [compoundName, setcompoundName] = useState(workout.compoundName);

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

  return (
    <ScrollView>
      <View>
        <Text>EditWorkout - Workout ID: {workout._id}</Text>
        { !editMode ? 
          <>
            <Text>{ workout.compoundName } { workout.repRange }</Text>

            {workout.compoundSets && workout.compoundSets.map((set: any, index: any) => (
              <Text key={index}>{set}</Text>
            ))}

            {workout.accessory && workout.compoundSets.map((set: any, index: any) => (
              <Text key={index}>{set}</Text>
            ))}

          </>
        
          : 
          <>
            
            
            <SelectList 
              setSelected={setcompoundName} 
              data={compoundLifts} 
              save="value"       
              placeholder={workout.compoundName}
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


          </>
        }
      </View>
    </ScrollView>
  );
};

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

export default EditWorkout;
