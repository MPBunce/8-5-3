import { createSlice } from '@reduxjs/toolkit';

const userInfoFromLocalStorage = localStorage.getItem('userInfo');
const userInfo = userInfoFromLocalStorage ? JSON.parse(userInfoFromLocalStorage) : null;

const initialState = {
  userInfo: userInfo as string | null, // Type assertion to string | null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state: any, action: any) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state: any, action: any) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    }
})

export const {
    setCredentials,
    logout
} = authSlice.actions;

export default authSlice.reducer