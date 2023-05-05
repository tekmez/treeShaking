import React from 'react';
import TreeSvg from '../assets/TreeSvg';

const Tree = ({ isShake }) => {
  return (
    <div className={`tree ${isShake && 'shaking'}`}>
      <TreeSvg />
    </div>
  );
};

export default Tree;
