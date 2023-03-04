import userReducer, {
  userSignUp,
  userLogin,
  userLogout,
} from '../../redux/users/usersSlice';

const successSignUp = {
  status: { code: 200, message: 'Signed up sucessfully.' },
};

const successLogin = {
  status: { code: 200, message: 'Logged in sucessfully.' },
};

const successLogout = {
  status: 200,
  message: 'logged out successfully',
};

const SignUpSuccessfully = {
  type: userSignUp.fulfilled,
  payload: successSignUp,
};

const LoginSuccessfully = {
  type: userLogin.fulfilled,
  payload: successLogin,
};

const LogoutSuccessfully = {
  type: userLogout.fulfilled,
  payload: successLogout,
};

describe('User Auth', () => {
  test('Dispatch userSignup thunk successfully will return status code 200', () => {
    const newUser = userReducer({}, SignUpSuccessfully);
    expect(newUser.message).toBe('Signed up sucessfully.');
  });

  test('Dispatch login thunk successfully will return status code 200', () => {
    const newUser = userReducer({}, LoginSuccessfully);
    expect(newUser.message).toBe('Logged in sucessfully.');
  });

  test('Dispatch logout thunk successfully will return status code 200', () => {
    const newUser = userReducer({}, LogoutSuccessfully);
    expect(newUser.message).toBe('logged out successfully');
  });
});
