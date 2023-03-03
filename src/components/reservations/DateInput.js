import PropTypes from 'prop-types';
import React from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import style from './css/Input.module.css';

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
  value: PropTypes.instanceOf(Date).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};
