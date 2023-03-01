import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './rooms/roomsSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
export default store;
