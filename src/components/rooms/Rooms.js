import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Link } from 'react-router-dom';

import {
  selectAllRooms,
  getRooms,
  getRoomsStatus,
} from '../../redux/rooms/roomsSlice';
import '../../styles/rooms.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Sidebar from '../../pages/Sidebar';

const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(selectAllRooms);

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  return (
    <>
      <Sidebar />
      <div className="main-container ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-2xl font-extrabold text-gray-800 tracking-widest mb-3">
            LATEST ROOMS
          </h1>
          <p className="text-sm text-zinc-500">Please select a Room</p>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={() => {}}
          onSlideChange={() => {}}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1124: {
              slidesPerView: 3,
            },
          }}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room.id}>
              <Link to={`/rooms/${room.id}`}>
                <div className="flex flex-col items-center text-center mt-20">
                  <img
                    src={room.image}
                    alt="room"
                    className="room-image shadow-lg"
                  />

                  <h2 className="text-bold text-xl text-gray-800">
                    {room.name}
                  </h2>
                  <p className="text-sm text-zinc-500 px-12 lg:px-6  ">
                    {room.description.substring(0, 120)}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Rooms;
