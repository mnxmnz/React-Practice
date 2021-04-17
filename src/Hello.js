import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color,
      }}
    >
      {isSpecial && <b>*</b>}
      {name}님 안녕하세요
    </div>
  );
}

Hello.defaultProps = {
  name: '이름 없음',
};

export default Hello;
