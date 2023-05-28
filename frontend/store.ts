const configureStore = require('@reduxjs/toolkit')

import authReducer from './slices/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
    devTools: true
});


export default store;