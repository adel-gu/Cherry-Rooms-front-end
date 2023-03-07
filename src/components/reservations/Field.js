import PropTypes from 'prop-types';
import React from 'react';
import style from './css/Field.module.css';

export default function Field({ k, value }) {
  return (
    <li>
      <p className={style.text}>{`${k} :`}</p>
      <h3 className={style.body}>{value}</h3>
    </li>
  );
}

Field.propTypes = {
  k: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
