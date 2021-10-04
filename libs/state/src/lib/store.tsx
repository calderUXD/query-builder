import { configureStore } from '@reduxjs/toolkit';
import queryBulderSliceReducer from './querySlice';

export const store = configureStore({
  reducer: {
    QueryBulder: queryBulderSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

