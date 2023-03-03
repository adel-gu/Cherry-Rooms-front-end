import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DateInput from './DateInput';
import RoomDetails from './RoomDetails';
import NumberInput from './NumberInput';
import SubmitBtn from './SubmitBtn';
import SelectInput from './SelectInput';
import style from './css/ReservationCard.module.css';
import { createReservation } from '../../redux/reservations/reservationSlice';

const roomProp = [
  {
    id: 1,
    name: 'Luxury 1',
    beds: 2,
    price: 10.99,
    description: 'Its a wonderful suite',
    image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    city: 'Tokyo',
  },
  {
    id: 2,
    name: 'Luxury 2',
    beds: 8,
    price: 25.99,
    description: 'Its a wonderful suite gggggg gggggg gg ggggg gggg ggggg gggggg ggggg',
    image:
        'https://images.unsplash.com/photo-1556784344-ad913c73cfc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VpdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    city: 'Islamabad',
  },
  {
    id: 3,
    name: 'Luxury 3',
    beds: 4,
    price: 16.99,
    description: 'Best room with good price',
    image:
        'https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VpdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    city: 'Paris',
  },
];

export default function ReservationCard() {
  const dispatch = useDispatch();
  const minDate = new Date();
  const currentDate = new Date();
  minDate.setDate(currentDate.getDate() - 1);
  currentDate.setDate(currentDate.getDate() + 1);
  const { id } = useParams();

  const [roomId, setRoomId] = useState(id);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(currentDate);
  const [numOfPersons, setNumOfPersons] = useState(1);

  const onClick = () => {
    const data = {
      reservation: {
        from_date: new Date(fromDate).toLocaleDateString(),
        to_date: new Date(toDate).toLocaleDateString(),
        number_of_persons: numOfPersons,
      },
    };
    console.log(data);
    // dispatch(createReservation(roomId, data));
  };

  return (
    <div className="main-container">
      <div className={style.outerContainer}>
        <div className={`${style.container} shadow-lg`}>
          {roomId && <RoomDetails room={roomProp[roomId - 1]} />}
          <section className={style.innerContainer}>
            <h1 className={style.title}>Room Reservation</h1>
            <p className={style.text}>Please fill the below form to reserve this room</p>
            <form className={style.formContainer}>
              {!id && (
              <SelectInput
                label="Choose a room"
                onChange={setRoomId}
              />
              )}
              <DateInput
                id="fromDate"
                value={fromDate}
                label="Start Date"
                onChange={(date) => setFromDate(date)}
                options={{ minDate, dateFormat: 'd/m/Y' }}
              />
              <DateInput
                id="toDate"
                value={toDate}
                label="End Date"
                onChange={(date) => setToDate(date)}
                options={{ minDate: new Date(), dateFormat: 'd/m/Y' }}
              />
              <NumberInput
                id="nop"
                label="Number of guests"
                value={numOfPersons}
                onChange={(nop) => setNumOfPersons(nop)}
              />
              <SubmitBtn onClick={() => onClick()} />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
