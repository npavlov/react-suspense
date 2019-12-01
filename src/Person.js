import React, { memo } from 'react';

export default memo(({ data }) => {
  const person = data.person.read();

  return <div>{person.name.first}</div>;
});
