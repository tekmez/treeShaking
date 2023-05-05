import React from 'react';
import AppleSvg from '../svg/AppleSvg';
const Apple = ({ style, isShake }) => {
  return (
    <div className={`apple ${isShake && 'dropping'}`} style={style}>
      <AppleSvg />
    </div>
  );
};

export default Apple;
