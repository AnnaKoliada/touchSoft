import React, { useState } from 'react';
import { ICounter } from '../../itnerface';
import Counter from '../Counter/Counter';
import './Main.css';

const Main = (): JSX.Element => {
  const [counters, setCounters] = useState<ICounter[]>([]);

  function uniqueID() {
    const number = Math.round(Math.random() * 1000);
    if (counters.find((el) => el.id === number)) {
      uniqueID();
    }
    return number;
  }
  function addCounter() {
    const array = counters.map((el) => {
      if (el.evenOdd === 'четное') {
        return { id: el.id, number: el.number + 1, evenOdd: 'нечетное' };
      }
      return { id: el.id, number: el.number, evenOdd: el.evenOdd };
    });
    setCounters([...array, { number: 0, id: uniqueID(), evenOdd: 'четное' }]);
  }
  function reset() {
    setCounters([]);
  }
  
  function sumNumberCounters() {
    return counters.reduce((sum, { number }) => sum + number, 0);
  }

  return (
    <main className='main'>
      <h2>Counter Counter</h2>
      <div className='main-buttons'>
        <div className='main-addCounter' onClick={addCounter}>
          Add Counter
        </div>
        <div className='main-reset' onClick={reset}>
          Reset
        </div>
        <div>
          {' '}
          <p className='main-numberConters'>Number of counters: {counters.length}</p>
          <p className='main-summaConters'>
            The sum of the values of all counters: {sumNumberCounters()}
          </p>
        </div>
      </div>
      <div className='counters'>
        {counters.length !== 0
          ? counters.map(({ id }) => {
            return (
                <div className='card' key={id} data-id={id}>
                  <Counter id={id} counters={counters} setCounters={setCounters} />
                </div>
            );
          })
          : null}
      </div>
    </main>
  );
};

export default Main;
