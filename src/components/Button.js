import React from 'react';

const Button = ({ isShake, setIsShake }) => {
  return (
    <button className="shakeBtn" onClick={() => setIsShake(!isShake)}>
      SHAKE
    </button>
  );
};

export default Button;
