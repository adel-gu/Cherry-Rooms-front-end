import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './rooms/roomsSlice';
import reservationReducer from './reservations/reservationSlice';

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    reservations: reservationReducer,
  },
});
export default store;
