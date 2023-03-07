import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3000/api/v1';
export const FETCH_ROOMS = `${URL}/rooms`;

const CREATE_ROOM_URL = 'http://localhost:3000/api/v1/rooms';

const initialState = {
  rooms: [],
  status: 'idle',
  error: null,
  isRoomCreated: false,
};

export const createRoom = createAsyncThunk('create_room', async (roomInfo) => {
  const res = fetch(CREATE_ROOM_URL, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
    body: JSON.stringify(roomInfo),
  });
  const data = (await res).json();
  console.log(await data);
  return data;
});

export const getRooms = createAsyncThunk('rooms/getRooms', async () => {
  const response = await axios.get(FETCH_ROOMS, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return response.data;
});

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRoom.fulfilled, (state, action) => ({
        ...state,
        isRoomCreated: action.payload.status.success,
      }))
      .addCase(getRooms.pending, (state) => ({
        ...state,
        status: 'Loading',
      }))
      .addCase(getRooms.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        rooms: action.payload,
      }))
      .addCase(getRooms.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const selectAllRooms = (state) => state.rooms.rooms;
export const getRoomsStatus = (state) => state.rooms.status;
export const getRoomsError = (state) => state.rooms.error;

export default roomsSlice.reducer;
