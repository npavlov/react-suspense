import React, { Suspense, useState, useTransition } from 'react';
import { createApi } from './PersonApi';
import Person from './Person';
import Num from './Num';

const initData = createApi();

function App() {
  const [data, setData] = useState(initData);

  const [startTransition] = useTransition({
    timeoutMs: 1000000,
  });

  const execTransition = () => {
    startTransition(() => {
      setData(createApi());
    });
  };

  return (
    <div className='App'>
      <Suspense fallback={<h2>Loading person....</h2>}>
        <Person data={data} />
      </Suspense>
      <Suspense fallback={<h2>Loading num....</h2>}>
        <Num data={data} />
      </Suspense>

      <button onClick={execTransition}>Refresg</button>
    </div>
  );
}

export default App;
