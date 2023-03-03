import PropTypes from 'prop-types';
import React from 'react';
import style from './css/SubmitBtn.module.css';

export default function SubmitBtn({ onClick }) {
  return (
    <div className={style.btnContainer}>
      <button
        className={style.btn}
        type="button"
        onClick={() => onClick()}
      >
        Reserve
      </button>
    </div>
  );
}

SubmitBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
