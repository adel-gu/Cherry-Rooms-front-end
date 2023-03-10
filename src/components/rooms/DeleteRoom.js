import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeRoom, selectAllRooms } from '../../redux/rooms/roomsSlice';
import '../../styles/roomdetails.css';
import Sidebar from '../../pages/Sidebar';

const DeleteRoom = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser.id);
  const rooms = useSelector(selectAllRooms);
  const filteredRooms = rooms.filter((room) => room.user_id === userId);

  const roomslist = filteredRooms.map((room) => (
    <li key={room.id} className="flex justify-between py-2 px-4">
      <span>{room.name}</span>
      <button
        type="button"
        className="bg-red-600 text-white rounded-md py-1 px-2"
        onClick={() => dispatch(removeRoom(room.id))}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-extrabold text-gray-800 tracking-widest mb-3">
            Delete Room
          </h1>
          <p className="text-sm text-zinc-500">
            Please select a Room from this list to delete it
          </p>
        </div>
        <ul className="room-details-ul shadow-lg mx-4 mt-4">{roomslist}</ul>
      </div>
    </>
  );
};

export default DeleteRoom;
