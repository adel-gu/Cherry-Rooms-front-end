import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const data = [
  {
    from_date: '04/12/2022',
    to_date: '05/12/2022',
    number_of_persons: 5,
    room: {
      id: '1',
      name: 'Luxury Suite 1',
      beds: 2,
      price: 10.99,
      description:
        'The Flats Luxury Suites is the best Cache Valley lodging, thanks to a vibe that"s chic and sophisticated. Comfortable yet stylish, granting easy access to the best Logan has to offer.',
      image:
        'https://images.unsplash.com/photo-1560067174-c5a3a8f37060?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80',
      city: 'Lahore',
    },
  },
  {
    from_date: '04/12/2022',
    to_date: '05/12/2022',
    number_of_persons: 5,
    room: {
      id: '2',
      name: 'Luxury Suite 2',
      beds: 3,
      price: 15.99,
      description:
        'Exposed architectural rock & concrete frame the living space & juxtapose the lounge space. Modern Vibe, concrete bones, luxury designHotel, Airbnb, Rental Lodging in Logan, Utah',
      image:
        'https://images.unsplash.com/photo-1556784344-ad913c73cfc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VpdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      city: 'Paris',
    },
  },
  {
    from_date: '04/12/2022',
    to_date: '05/12/2022',
    number_of_persons: 5,
    room: {
      id: '3',
      name: 'Luxury Suite 3',
      beds: 4,
      price: 20.99,
      description:
        'The Flats Luxury Suites is the best Cache Valley lodging, thanks to a vibe that"s chic and sophisticated. Comfortable yet stylish, granting easy access to the best Logan has to offer.',
      image:
        'https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VpdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      city: 'New York',
    },
  },
];

const GET_URL = 'http://localhost:3000/api/v1/reservations';

export const fetchReservations = createAsyncThunk('cherry/fetch', async () => {
  const res = await fetch(GET_URL, {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  const data = await res.json();
  return data;
});

export const createReservation = createAsyncThunk('cherry/create', async (roomId, reservation) => {
  // console.log(roomId);
  // console.log(reservation);
  await fetch(`http://localhost:3000/api/v1/rooms/${roomId}/reservations`, {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(reservation),
  });
});

export const deleteReservation = createAsyncThunk('cherry/create', async (id) => {
  await fetch(`http://localhost:3000/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
});

const reservationSlice = createSlice({
  name: 'reservationDetails',
  initialState: {
    loading: 'initial',
    reservations: data,
    status: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReservations.pending, (state) => ({ loading: 'Loading Api' }))
      .addCase(fetchReservations.fulfilled, (state, action) => ({ ...state, loading: 'api loaded', reservations: action.payload }))
      .addCase(fetchReservations.rejected, (state) => ({ ...state, loading: 'Failed to load Api.' }));
  },
});

export default reservationSlice.reducer;
