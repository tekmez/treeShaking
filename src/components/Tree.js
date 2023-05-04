import React from 'react';
import TreeSvg from '../svg/TreeSvg';

const Tree = ({ isShake }) => {
  return (
    <div className={`tree ${isShake && 'shaking'}`}>
      <TreeSvg />
    </div>
  );
};

export default Tree;
