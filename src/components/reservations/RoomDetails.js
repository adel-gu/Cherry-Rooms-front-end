import PropTypes from 'prop-types';
import React from 'react';
import Field from './Field';
import style from './css/RoomDetails.module.css';

export default function RoomDetails({ room }) {
  return (
    <ul
      className={style.container}
      style={{
        backgroundImage: `url(${room.image})`,
        backgroundColor: 'rgba(18, 23, 37, 0.6)',
      }}
    >
      { Object.entries(room).map(([k, v]) => (k !== 'image' && k !== 'id' && k !== 'reservations'
        ? <Field key={k} k={k} value={v} />
        : null)) }
    </ul>
  );
}

RoomDetails.propTypes = {
  room: PropTypes.objectOf(PropTypes.string).isRequired,
};
