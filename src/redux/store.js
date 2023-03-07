import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/roomsSlice';
import reservations from './reservations/reservationSlice';

const store = configureStore(
  {
    reducer: {
      rooms: roomsReducer,
      reservations,
    },
  },
  applyMiddleware(thunk),
);

export default store;
