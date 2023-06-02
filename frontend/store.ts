import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice';
import authReducer from './slices/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these paths in the state
        ignoredActions: [],
        ignoredPaths: ['auth.userInfo'],
      },
    }),
    devTools: true
});


export default store;