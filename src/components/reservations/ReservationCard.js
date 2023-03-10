import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DateInput from './DateInput';
import RoomDetails from './RoomDetails';
import NumberInput from './NumberInput';
import SubmitBtn from './SubmitBtn';
import SelectInput from './SelectInput';

import style from './css/ReservationCard.module.css';
import { createReservation } from '../../redux/reservations/reservationSlice';
import Sidebar from '../../pages/Sidebar';

export default function ReservationCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rooms } = useSelector((state) => ({ ...state.rooms }));

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
    const data = [
      roomId,
      {
        reservation: {
          from_date: new Date(fromDate).toLocaleDateString(),
          to_date: new Date(toDate).toLocaleDateString(),
          number_of_persons: numOfPersons,
        },
      },
    ];
    dispatch(createReservation(data));
    navigate('/reservations');
  };

  return (
    <>
      <Sidebar />
      <div className="main-container">
        <div className={style.outerContainer}>
          <div className={`${style.container}`}>
            {roomId && (
              <RoomDetails
                room={{
                  ...rooms.find((r) => +r.id === +roomId),
                  id: '',
                  reservations: '',
                }}
              />
            )}
            <section className={style.innerContainer}>
              <h1 className={style.title}>Room Reservation</h1>
              <p className={style.text}>
                Please fill the below form to reserve this room
              </p>
              <form className={style.formContainer}>
                {!id && (
                  <SelectInput label="Choose a room" onChange={setRoomId} />
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
    </>
  );
}
