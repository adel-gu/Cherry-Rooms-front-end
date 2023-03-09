import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  selectRoom,
  getRoomStatus,
  getSingleRoom,
} from '../../redux/rooms/roomDetailSlice';
import '../../styles/roomdetails.css';
import Sidebar from '../../pages/Sidebar';

const RoomDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const room = useSelector(selectRoom);
  const roomStatus = useSelector(getRoomStatus);
  useEffect(() => {
    if (roomStatus === 'idle') {
      dispatch(getSingleRoom(id));
    }
  }, [id, roomStatus, dispatch]);

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <div className="flex flex-col sm:flex-row px-8 sm:px-4 mt-8">
          <div className="w-full sm:w-[70%] rounded-xl">
            <img
              src={room.image}
              alt="room"
              className="w-[100%] object-cover"
            />
          </div>
          <div className="w-full sm:w-[30%] sm:ml-2 flex flex-col">
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
            <button
              type="button"
              className="bg-prime py-2 px-4 item self-end text-white rounded-full mt-8"
              onClick={() => navigate(`/rooms/${room.id}/reservation`)}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
