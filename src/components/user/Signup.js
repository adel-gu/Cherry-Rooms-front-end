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
    <div className="grid gap-0 grid-cols-2 grid-rows-1">
      <div className="bg-decorative h-screen hidden md:block" />
      <div className="w-screen md:w-auto h-screen flex flex-col items-center justify-between pb-8">
        <div className="pt-8">
          <div className="text-center">
            <h1 className="text-4xl font-medium text-lime-400">SignUp</h1>
            <p className="max-w-xs pt-6">
              SignUp and start your rooms reservations all over the world
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={(e) => handleSubmit(e)}
            className="h-1/3 w-100 pt-8"
          >
            <ul>
              <li>
                <input
                  type="text"
                  name="f_name"
                  placeholder="Full Name"
                  maxLength={50}
                  required
                  className="w-full my-3 focus:ring-lime-600 focus:outline-2 focus:border-transparent"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="avatar"
                  placeholder="Avatar"
                  required
                  className="w-full my-3 focus:ring-lime-600 focus:outline-2 focus:border-transparent"
                />
              </li>
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
                SignUp
              </button>
            </ul>
          </form>
        </div>
        <div>
          Already got an account:
          <Link
            to="/login"
            className="text-lime-600 font-medium underline hover:text-lime-700 ml-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
