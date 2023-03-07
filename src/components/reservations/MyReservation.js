import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteReservation } from '../../redux/reservations/reservationSlice';

import './css/MyReservation.css';

export default function MyReservation() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchReservations());
  }, [dispatch]);

  const { loading, reservations } = useSelector((state) => ({ ...state.reservations }));

  if (loading === 'Loading Api') {
    /// return a spinner here
  }

  return (
    <div className="main-container ">
      <div className="container">
        <div>
          <h1 className="section-title"> My Reservations </h1>
          <p className="section-text">
            These are the rooms reserved by you,
            you can view and manage them.
          </p>
        </div>
        <ul className="grid-list">
          {
            reservations.map((res) => (
              <li key={res.room.id}>
                <div className="project-card">

                  <figure className="img-holder">
                    <img
                      src={res.room.image}
                      alt="reservation"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content-up">
                    <p className="section-text date">{`${res.from_date} - ${res.to_date}`}</p>
                    <p className="section-text date">{`Guests - ${res.number_of_persons}`}</p>
                  </div>

                  <div className="card-content">

                    <p className="card-subtitle">{res.room.city}</p>

                    <h3 className="h3">
                      <Link to={`/rooms/${res.room.id}`} className="card-title">{res.room.name}</Link>
                    </h3>

                    <button className="btn btn-primary" type="button" onClick={() => deleteReservation(res.id)}>Delete</button>

                  </div>

                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}
