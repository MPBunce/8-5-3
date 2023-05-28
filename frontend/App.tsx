import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import StackLayout from './app/_layout';
import { Text, View } from 'react-native';

export default function App () {
    return (
      <Provider store={store}>

        <View>
          <Text>Hello</Text>
        </View>
       
      </Provider>
    );
};
  
