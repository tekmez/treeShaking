import React from 'react';
import CloudSvg from '../assets/CloudSvg';

const Cloud = ({ className }) => {
  return (
    <div className={className} style={{ width: '250px', height: '250px', position: 'absolute' }}>
      <CloudSvg />
    </div>
  );
};

export default Cloud;
