import PropTypes from 'prop-types';
import React from 'react';
import Flatpickr from 'react-flatpickr';
import style from './css/Input.module.css';
import 'flatpickr/dist/themes/material_green.css';

export default function DateInput({
  value, onChange, options, label, id,
}) {
  return (
    <div>
      <div style={{ fontSize: '.875rem' }}>
        <label htmlFor={id}>
          {' '}
          {label}
          {' '}
        </label>
      </div>
      <Flatpickr
        className={style.input}
        id={id}
        placeholder="Invalid"
        value={value}
        onChange={(date) => { onChange(date); }}
        options={options}
      />
    </div>
  );
}

DateInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
    PropTypes.objectOf(PropTypes.instanceOf(Date)),
  ]).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.exact({
    minDate: PropTypes.instanceOf(Date),
    dateFormat: PropTypes.string,
  }).isRequired,
};
