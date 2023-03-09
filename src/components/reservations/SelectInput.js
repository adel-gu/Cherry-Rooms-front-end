import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import './css/select.css';

export default function SelectInput({ onChange, label }) {
  const { rooms } = useSelector((state) => ({ ...state.rooms }));
  const roomOptions = rooms.map((room) => ({ value: room.id, label: room.name }));

  return (
    <div>
      <div>
        <label htmlFor="select-room">
          {' '}
          {label}
          {' '}
        </label>
      </div>
      <Select
        id="select-room"
        className="input"
        onChange={(val) => onChange(val.value)}
        isClearable
        isSearchable
        options={roomOptions}
      />
    </div>
  );
}

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
