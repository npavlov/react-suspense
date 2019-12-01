import React, { memo } from 'react';

export default memo(({ data }) => {
  const number = data.n.read();

  return <div>{number}</div>;
});
