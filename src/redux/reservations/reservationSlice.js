import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://localhost:3000/api/v1/';

const reservationSlice = createSlice({
  name: 'reservationDetails',
  initialState: {
    loading: 'initial',
    reservations: [],
    status: false,
  },
  reducers: {
    remove: (state, action) => {
      const newState = state.reservations.filter((r) => r.id !== action.payload);
      return { ...state, reservations: newState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.pending, (state) => ({ ...state, loading: 'Loading Api' }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({ ...state, loading: 'api loaded', reservations: action.payload }))
      .addCase(fetchReservations.rejected, (state) => ({ ...state, loading: 'Failed to load Api.' }));
  },
});

export const fetchReservations = createAsyncThunk('cherry/fetch', async () => {
  const res = await fetch(`${URL}reservations`, {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  const data = await res.json();
  return data;
});

export const createReservation = createAsyncThunk('cherry/create', async (room) => {
  await fetch(`${URL}rooms/${room[0]}/reservations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(room[1]),
  });
});

export const deleteReservation = createAsyncThunk('cherry/create', async (id, thunkApi) => {
  await fetch(`${URL}reservations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });

  const { remove } = reservationSlice.actions;
  thunkApi.dispatch(remove(id));
});

export default reservationSlice.reducer;
