import {configureStore, Middleware, Store} from '@reduxjs/toolkit';
import {awsAPI} from './rtkApis/awsAPI';
import usersSlice from './slices/usersSlice';

export const store : Store = configureStore({
  reducer: {
    [awsAPI.reducerPath]: awsAPI.reducer,
    usersSlice: usersSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      awsAPI.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;