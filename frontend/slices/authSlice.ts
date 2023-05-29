import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserInfoFromStorage = async () => {
  try {
    const userInfoFromStorage = await AsyncStorage.getItem('userInfo');
    return userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null;
  } catch (error) {
    console.log('Error retrieving user info from storage: ', error);
    return null;
  }
};

const initialState = {
  userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const { actions } = authSlice;

export const setCredentials = (userInfo: any) => {
  return (dispatch: any) => {
    try {
      dispatch(actions.setCredentials(userInfo));
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo)).catch((error) => {
        console.log('Error setting user credentials: ', error);
      });
    } catch (error) {
      console.log('Error setting user credentials: ', error);
    }
  };
};

export const logout = () => {
  return (dispatch: any) => {
    try {
      dispatch(actions.logout());
      AsyncStorage.removeItem('userInfo').catch((error) => {
        console.log('Error logging out: ', error);
      });
    } catch (error) {
      console.log('Error logging out: ', error);
    }
  };
};

export default authSlice.reducer;
