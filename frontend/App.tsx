import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import StackLayout from './app/_layout';

const App = () => {
    return (
      <Provider store={store}>
        <StackLayout />
      </Provider>
    );
};
  
export default App;