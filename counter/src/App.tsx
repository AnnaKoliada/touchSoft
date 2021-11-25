import React, { useState } from 'react';
import './App.css';
import cn from '../node_modules/classnames';

const App = function (): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [evenOdd, setEvenOdd] = useState<string>('четное');

  function checkOddOrEven(number: number):void {
    if (number % 2  === 0){
      setEvenOdd('четное');
    } else  setEvenOdd('нечетное');
  }
  function addNumber():void {
    setCounter(counter + 1);
    checkOddOrEven(counter + 1);
  }
  function minusNumber():void {
    setCounter(counter - 1);
    checkOddOrEven(counter - 1);
  }
  function reset():void {
    setCounter(0);
    setEvenOdd('четное');
  }
 
  return (
    <div className ={cn('container', { 'blue': (evenOdd === 'четное'), 'green': (evenOdd === 'нечетное') })}>
      <div className='number'>{counter}</div>
      <div className='evenOdd'>Введённо <b> {evenOdd}</b> число </div>
      <div className='buttons'>
        <div className='add' onClick={addNumber}>+</div>
        <div className='reset' onClick={reset}>Reset</div>
        <div className={cn('minus', { 'disabled': (counter === 0) })} onClick={minusNumber}>-</div>
      </div>
    </div>
  );
};

export default App;
