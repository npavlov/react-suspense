import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { createApi } from './PersonApi';
import Person from './Person';
import Num from './Num';

const api = createApi();

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<h2>Loading person....</h2>}>
        <Person data={api} />
      </Suspense>
      <Suspense fallback={<h2>Loading num....</h2>}>
        <Num data={api} />
      </Suspense>
    </div>
  );
}

export default App;
