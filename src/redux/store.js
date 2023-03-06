import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/roomsSlice';
import reservations from './reservations/reservationSlice';
import user from './users/usersSlice';

const store = configureStore(
  {
    reducer: {
      rooms: roomsReducer,
      reservations,
      user,
    },
  },
  applyMiddleware(thunk),
);

export default store;
