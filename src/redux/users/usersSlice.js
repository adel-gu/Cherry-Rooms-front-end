import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SIGNUP_URL = 'http://localhost:3000/signup';
const LOGIN_URL = 'http://localhost:3000/login';
const LOGOUT_URL = 'http://localhost:3000/logout';
const USER_SIGNED = 'user_signup';
const USER_LOGGED = 'user_login';
const USER_LOGGEDOUT = 'user_loggedout';

// User login and signup helper function
const userAuth = async (url, userInfo) => {
  const res = fetch(url, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
  localStorage.setItem('token', (await res).headers.get('Authorization'));

  return (await res).json();
};

// User SignUp thunk
export const userSignUp = createAsyncThunk(USER_SIGNED, async (userInfo) => {
  const data = await userAuth(SIGNUP_URL, userInfo);
  return data;
});

// User Login thunk
export const userLogin = createAsyncThunk(USER_LOGGED, async (userInfo) => {
  const data = await userAuth(LOGIN_URL, userInfo);
  return data;
});

// User Logout thunk
export const userLogout = createAsyncThunk(USER_LOGGEDOUT, async () => {
  const res = fetch(LOGOUT_URL, {
    method: 'delete',
    headers: {
      'content-type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
  });
  const data = (await res).json();
  localStorage.removeItem('token');
  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    message: '',
    data: {},
    isLogged: false,
  },
  extraReducers: (builder) => {
    builder.addCase(userSignUp.fulfilled, (state, action) => ({
      ...state,
      message: action.payload.status.message,
      data: action.payload.data,
      isLogged: true,
    }));
    builder.addCase(userLogin.fulfilled, (state, action) => ({
      ...state,
      message: action.payload.status.message,
      data: action.payload.data,
      isLogged: true,
    }));
    builder.addCase(userLogout.fulfilled, (state, action) => ({
      ...state,
      message: action.payload.message,
      data: {},
      isLogged: false,
    }));
  },
});

export default userSlice.reducer;
