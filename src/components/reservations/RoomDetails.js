import PropTypes from 'prop-types';
import React from 'react';
import Field from './Field';
import style from './css/RoomDetails.module.css';

export default function RoomDetails(props) {
  const { room } = props;
  return (
    <ul className={style.container} style={{ backgroundImage: `url(${room.image})`, backgroundColor: '#000' }}>
      { Object.entries(room).map(([k, v]) => (k !== 'image' ? <Field key={k} k={k} value={v} /> : null)) }
    </ul>
  );
}

RoomDetails.propTypes = {
  room: PropTypes.objectOf(PropTypes.string).isRequired,
};
