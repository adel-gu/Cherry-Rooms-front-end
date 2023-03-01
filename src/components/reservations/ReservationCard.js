import React, { useState } from 'react';
import DateInput from './DateInput';
import RoomDetails from './RoomDetails';
import NumberInput from './NumberInput';
import SubmitBtn from './SubmitBtn';
import style from './css/ReservationCard.module.css';

const roomProp = {
  name: 'Luxury',
  beds: 2,
  price: 10.99,
  description: 'Its a wonderful suite',
  image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  city: 'Islamabad',
};

export default function ReservationCard() {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(currentDate);
  const [numOfPersons, setNumOfPersons] = useState(1);

  return (
    <div className={style.outerContainer}>
      <div className={style.container}>
        <RoomDetails room={roomProp} />
        <section className={style.innerContainer}>
          <h1 className={style.title}>Room Reservation</h1>
          <p className={style.text}>Please fill the below form to reserve this room</p>
          <form className={style.formContainer}>
            <DateInput
              id="fromDate"
              value={fromDate}
              label="Start Date"
              onChange={(date) => setFromDate(date)}
              options={{ minDate: new Date(), dateFormat: 'm/d/Y' }}
            />
            <DateInput
              id="toDate"
              value={toDate}
              label="End Date"
              onChange={(date) => setToDate(date)}
              options={{ minDate: fromDate, dateFormat: 'm/d/Y' }}
            />
            <NumberInput
              id="nop"
              label="Number of guests"
              value={numOfPersons}
              onChange={(nop) => setNumOfPersons(nop)}
            />
            <SubmitBtn />
          </form>
        </section>
      </div>
    </div>
  );
}
