import React from 'react';

const Line = ({ color, thickness, length }) => {
  const lineStyle = {
    height: thickness,
    width: length,
    backgroundColor: color
  };

  return <div style={lineStyle} className="relative top-5" ></div>;
};

export default Line;
