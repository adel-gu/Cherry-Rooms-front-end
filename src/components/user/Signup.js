import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSignUp } from '../../redux/users/usersSlice';

const SignUp = () => {
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
        f_name: data.f_name,
        avatar: data.avatar,
        email: data.email,
        password: data.password,
      },
    };

    dispatch(userSignUp(userInfo));
    e.target.reset();
  };

  if (user.isLogged) {
    navigate('/rooms');
  }

  return (
    <div className="main-container">
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <ul>
          <li>
            <input type="text" name="f_name" placeholder="Full Name" required />
          </li>
          <li>
            <input type="text" name="avatar" placeholder="Avatar" required />
          </li>
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
          <button type="submit">Sign Up</button>
        </ul>
      </form>
      <div>
        Already got an account:
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUp;
