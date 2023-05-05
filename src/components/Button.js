import React from 'react';

const Button = ({ isShake, onClick }) => {
  return (
    <button className="shakeBtn" onClick={onClick}>
      {isShake ? 'RESET' : 'SHAKE'}
    </button>
  );
};

export default Button;
