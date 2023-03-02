import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllRooms } from '../../redux/rooms/roomsSlice';
import '../../styles/roomdetails.css';

const RoomDetails = () => {
  const { id } = useParams();
  const rooms = useSelector(selectAllRooms);

  const room = rooms.find((obj) => obj.id === id);
  console.log(room);
  return (
    <div className="main-container">
      <div className="flex flex-col sm:flex-row px-8 sm:px-4 mt-8">
        <div className="w-full sm:w-[70%] rounded-xl">
          <img src={room.image} alt="room" className="w-[100%] object-cover" />
        </div>
        <div className="w-full sm:w-[30%] sm:ml-2">
          <h2 className="font-bold text-xl text-right text-gray-800 my-2">
            {room.name}
          </h2>
          <ul className="room-details-ul font-[300] text-zinc-700 my-2">
            <li className="flex justify-between px-8 sm:px-4">
              <span>Beds</span>
              <span>{room.beds}</span>
            </li>
            <li className="flex justify-between px-8 sm:px-4">
              <span>Price</span>
              <span>{room.price}</span>
            </li>
            <li className="flex justify-between px-8 sm:px-4">
              <span>City</span>
              <span>{room.city}</span>
            </li>
          </ul>
          <p className="text-sm text-zinc-500 pl-2">{room.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
