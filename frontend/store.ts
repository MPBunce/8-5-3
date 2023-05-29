import { configureStore } from 'redux';

import authReducer from './slices/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
    devTools: true
});


export default store;