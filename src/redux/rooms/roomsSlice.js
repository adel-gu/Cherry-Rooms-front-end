import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
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
  {
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
  {
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
  {
    id: '4',
    name: 'Luxury Suite 4',
    beds: 4,
    price: 40.99,
    description:
      'The Flats Luxury Suites is the best Cache Valley lodging, thanks to a vibe that"s chic and sophisticated. Comfortable yet stylish, granting easy access to the best Logan has to offer.',
    image:
      'https://images.unsplash.com/photo-1581404476143-fb31d742929f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1aXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    city: 'london',
  },
  {
    id: '5',
    name: 'Luxury Suite 5',
    beds: 2,
    price: 50.99,
    description:
      'The Flats Luxury Suites is the best Cache Valley lodging, thanks to a vibe that"s chic and sophisticated. Comfortable yet stylish, granting easy access to the best Logan has to offer.',
    image:
      'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    city: 'Los Angeles',
  },
];

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
});

// export const { postAdded } = postsSlice.actions;
export const selectAllRooms = (state) => state.rooms;
export default roomsSlice.reducer;
