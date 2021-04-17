import React from 'react';

function Hello({ color, name }) {
  return (
    <div
      style={{
        color,
      }}
    >
      {name}님 안녕하세요
    </div>
  );
}

Hello.defaultProps = {
  name: '이름 없음',
};

export default Hello;
