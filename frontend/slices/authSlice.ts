import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const init = async () => {
//   const asyncUserInfo = await AsyncStorage.getItem('userInfo');
//   try {
//     const parsedUserInfo = asyncUserInfo !== null ? JSON.parse(asyncUserInfo) : null;
//     return parsedUserInfo;
//   } catch (error) {
//     console.log('Error parsing JSON:', error);
//     return null;
//   }
// };

// const userInfo = init();

const initialState = {
  userInfo: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state: any, action: any) => {
      state.userInfo = action.payload;
      AsyncStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout: (state: any, action: any) => {
      state.userInfo = null;
      AsyncStorage.removeItem('userInfo')
    }
  }
})

export const {
  setCredentials,
  logout
} = authSlice.actions;

export default authSlice.reducer