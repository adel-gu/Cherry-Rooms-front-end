import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../redux/users/usersSlice';

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
      },
    };

    dispatch(userLogin(userInfo));
    e.target.reset();
  };

  if (user.isLogged) {
    navigate('/rooms');
  }

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
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
