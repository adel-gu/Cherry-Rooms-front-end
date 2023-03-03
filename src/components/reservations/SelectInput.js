import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import './css/select.css';

const roomProp = [
  {
    id: 1,
    name: 'Luxury 1',
    beds: 2,
    price: 10.99,
    description: 'Its a wonderful suite',
    image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    city: 'Islamabad',
  },
  {
    id: 2,
    name: 'Luxury 2',
    beds: 2,
    price: 10.99,
    description: 'Its a wonderful suite',
    image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    city: 'Islamabad',
  },
  {
    id: 3,
    name: 'Luxury 3',
    beds: 2,
    price: 10.99,
    description: 'Its a wonderful suite',
    image: 'https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    city: 'Islamabad',
  },
];

export default function SelectInput({onChange, label}) {
  
  const roomOptions = roomProp.map((room) => ({ value: room.id, label: room.name }));

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
