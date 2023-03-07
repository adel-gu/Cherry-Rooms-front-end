import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FETCH_ROOMS } from './roomsSlice';

export const getSingleRoom = createAsyncThunk(
  'room/getSingleRoom',
  async (id) => {
    const response = await axios.get(`${FETCH_ROOMS}/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    return response.data;
  },
);

const initialState = {
  room: [],
  status: 'idle',
  error: null,
};

const roomDetailSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSingleRoom.pending, (state) => ({
        ...state,
        status: 'Loading',
      }))
      .addCase(getSingleRoom.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        room: action.payload,
      }))
      .addCase(getSingleRoom.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const selectRoom = (state) => state.room.room;
export const getRoomStatus = (state) => state.room.status;
export const getRoomError = (state) => state.room.error;

export default roomDetailSlice.reducer;
