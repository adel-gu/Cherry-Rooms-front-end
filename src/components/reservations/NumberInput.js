import PropTypes from 'prop-types';
import React from 'react';
import style from './css/Input.module.css';

export default function NumberInput(props) {
  const {
    value, onChange, label, id,
  } = props;

  return (
    <div>
      <div>
        <label htmlFor={id}>
          {' '}
          {label}
          {' '}
        </label>
      </div>
      <input
        className={style.input}
        type="number"
        id={id}
        value={value}
        min="1"
        max="10"
        onChange={(val) => onChange(val.target.value)}
      />
    </div>
  );
}

NumberInput.propTypes = {
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
