import React from 'react';

const Flex = ({
  alignItems = 'center',
  justifyContent = 'center',
  flexDirection = 'row',
  flexWrap = 'wrap',
  style,
  children
}) => {
  return (
    <div
      style={{
        ...style,
        alignItems,
        flexDirection,
        flexWrap,
        justifyContent,
        display: 'flex'
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
