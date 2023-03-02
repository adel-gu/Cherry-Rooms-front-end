import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/users/usersSlice';

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleSubmit = (e) => {
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
      },
    };

    dispatch(userLogin(userInfo));
  };
  console.log(user);
  return (
    <>
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <ul>
          <li>
            <input type="email" name="email" placeholder="Email" required />
          </li>
          <li>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </li>
          <button type="submit">Log In</button>
        </ul>
      </form>
      <div>
        Create an account:
        <a href="#login">Log In</a>
      </div>
    </>
  );
};

export default Login;
