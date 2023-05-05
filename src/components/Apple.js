import React from 'react';
import AppleSvg from '../svg/AppleSvg';
const Apple = ({ style, isShake, onAnimationEnd }) => {
  return (
    <div onAnimationEnd={onAnimationEnd} className={`apple ${isShake && 'dropping'}`} style={style}>
      <AppleSvg />
    </div>
  );
};

export default Apple;
