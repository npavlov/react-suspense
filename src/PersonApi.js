import { stat } from 'fs';

const fetchPerson = () => {
  return fetch('https://randomuser.me/api')
    .then(x => x.json())
    .then(x => x.results[0]);
};

const wrapPromise = promise => {
  let status = 'pending';
  let result = '';

  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      }

      return result;
    },
  };
};

const randomNumber = () => {
  return new Promise(res =>
    setTimeout(() => res(Math.ceil(Math.random() * 100)), 1000)
  );
};

export const createApi = () => {
  return {
    person: wrapPromise(fetchPerson()),
    n: wrapPromise(randomNumber()),
  };
};
