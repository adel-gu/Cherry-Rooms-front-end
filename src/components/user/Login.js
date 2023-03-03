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
    <div className="grid gap-0 grid-cols-2 grid-rows-1">
      <div className="bg-decorative h-screen"></div>
      <div className="h-screen flex flex-col items-center justify-between pt-20 pb-8">
        <div className="text-center">
          <h1 className="text-4xl font-medium text-lime-400">Login</h1>
          <p className="max-w-xs pt-6">
            Login and start your rooms reservations all over the world
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => handleSubmit(e)}
          className="h-1/3 w-1/2"
        >
          <ul>
            <li>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full my-3 focus:ring-lime-600 focus:outline-2 focus:border-transparent"
              />
            </li>
            <li>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full my-3 focus:ring-lime-600 focus:border-transparent"
              />
            </li>
            <button
              type="submit"
              className="w-full bg-lime-500 text-white w-1/2 py-3 mx-auto mt-2 block hover:bg-lime-600"
            >
              Login
            </button>
          </ul>
        </form>
        <div>
          Create an account:
          <Link
            to="/signup"
            className="text-lime-600 font-medium underline hover:text-lime-700 ml-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
