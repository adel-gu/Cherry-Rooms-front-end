import { useState } from 'react';
import { FaSwatchbook } from 'react-icons/fa';
import {
  AiFillDatabase,
  AiFillDelete,
  AiFillHome,
  AiFillBank,
  AiOutlineLogin,
} from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { RiLoginCircleFill, RiCloseLine } from 'react-icons/ri';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [navHide, setNavHide] = useState(false);

  const displayHideNavbar = () => setNavHide(!navHide);

  return (
    <>
      <button
        type="button"
        className="close-sidebar sidebar-btn"
        onClick={displayHideNavbar}
      >
        <HiMenu className="text-2xl" />
      </button>
      <div
        className={
          navHide
            ? 'sidebar flex h-screen flex-col absolute justify-between border-r bg-white'
            : 'sidebar-hidden flex h-screen flex-col absolute justify-between border-r'
        }
      >
        <button
          type="button"
          className="close-sidebar sidebar-btn"
          onClick={displayHideNavbar}
        >
          <RiCloseLine className="text-2xl" />
        </button>
        <div className="px-4 py-6 mt-6">
          <span className="grid h-20 w-20  place-content-center text-center rounded-full bg-prime text-white">
            Cherry Rooms
          </span>

          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            <NavLink
              to="/rooms"
              className="flex items-center gap-2 rounded-lg hover:bg-prime hover:text-white px-4 py-2 text-gray-500"
            >
              <span>
                <AiFillHome />
              </span>
              <span>Rooms</span>
            </NavLink>

            <NavLink
              to="#"
              className="flex items-center cursor-pointer gap-2 rounded-lg hover:bg-prime hover:text-white px-4 py-2 text-gray-500"
            >
              <span>
                <AiFillDatabase />
              </span>
              <span>My Reservations</span>
            </NavLink>

            <NavLink
              to="#"
              className="flex items-center cursor-pointer gap-2 rounded-lg hover:bg-prime hover:text-white px-4 py-2 text-gray-500"
            >
              <span>
                <AiFillBank />
              </span>
              <span>Reserve a Room</span>
            </NavLink>
            <NavLink
              to="#"
              className="flex items-center cursor-pointer gap-2 rounded-lg hover:bg-prime hover:text-white px-4 py-2 text-gray-500"
            >
              <span>
                <FaSwatchbook />
              </span>
              <span>Create a Room</span>
            </NavLink>

            <NavLink
              to="#"
              className="flex items-center cursor-pointer gap-2 rounded-lg hover:bg-prime hover:text-white px-4 py-2 text-gray-500"
            >
              <span>
                <AiFillDelete />
              </span>
              <span>Delete Room</span>
            </NavLink>
          </nav>
        </div>

        <div className="px-4 flex flex-col space-y-1">
          <NavLink
            to="#"
            className="flex items-center cursor-pointer gap-2 rounded-lg hover:bg-prime hover:text-white px-4 py-2 text-gray-500"
          >
            <span>
              <AiOutlineLogin />
            </span>
            <span>Sign up</span>
          </NavLink>
          <NavLink
            to="#"
            className="flex items-center cursor-pointer gap-2 rounded-lg hover:bg-prime hover:text-white px-4 py-2 text-gray-500"
          >
            <span>
              <RiLoginCircleFill />
            </span>
            <span>Log In</span>
          </NavLink>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <NavLink
            to="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
