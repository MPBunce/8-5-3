import { View, Text, Dimensions, ScrollView, StyleSheet, Pressable, TextInput, Button, TouchableOpacity} from 'react-native'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const CreateWorkout = (props: any, ref: any) => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={testSubmit}>
          <Text>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const testSubmit = () => {
    console.log('testSubmit function called from child component');
    console.log("seleced compound:" + selectedCompound)
    console.log("seleced val:" + selectedValue)
    console.log("seleced weight:" +sets)
  };

  const [selectedValue, setSelectedValue] = useState('');


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
    <ScrollView>

      <SelectList 
        setSelected={(val: any) => setSelectedCompound(val)} 
        data={compoundLifts} 
        save="value"       
        placeholder="Select a compound lift"
      />

      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedValue === '8' && styles.selectedButton,
          ]}
          onPress={() => setSelectedValue('8')}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedValue === '5' && styles.selectedButton,
          ]}
          onPress={() => setSelectedValue('5')}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedValue === '3' && styles.selectedButton,
          ]}
          onPress={() => setSelectedValue('3')}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedValue === '1' && styles.selectedButton,
          ]}
          onPress={() => setSelectedValue('1')}
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
            placeholder="135"
          />
        </View>
      ))}
    </View>

      <Text>Accessory</Text>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
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

export default forwardRef(CreateWorkout);
