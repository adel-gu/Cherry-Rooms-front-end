import PropTypes from 'prop-types';
import React from 'react';
import style from './css/SubmitBtn.module.css';

export default function Field({ onClick }) {
  return (
    <div className={style.btnContainer}>
      <button
        className={style.btn}
        type="submit"
        onClick={() => onClick()}
      >
        Reserve
      </button>
    </div>
  );
}

Field.propTypes = {
  onClick: PropTypes.func.isRequired,
};
