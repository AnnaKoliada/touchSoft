import React, { useState } from 'react';
import './Counter.css';
import cn from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import { ICounter } from '../../itnerface';

interface Props {
  setCounters: any;
  counters: ICounter[];
  id: number;
}

const Counter = ({ counters, setCounters, id }: Props): JSX.Element => {

  function calcNumber(e: React.MouseEvent<HTMLDivElement, MouseEvent>, p: string): void {
    const elem: HTMLDivElement | null = e.currentTarget.closest('.card');
    let id1: string | number | undefined;
    if (elem) {
      id1 = elem.dataset.id;
      if (id1) {
        if (counters) {
          const array = counters.map((el) => {
            if (el.id === Number(id1)) {
              let oddEven;
              if (p === '-') {
                if ((el.number - 1) % 2 === 0) {
                  oddEven = 'четное';
                } else {
                  oddEven = 'нечетное';
                }
                return { number: el.number = el.number - 1, id: el.id, evenOdd: oddEven };
              }
              if (p === '+') {
                if ((el.number + 1) % 2 === 0) {
                  oddEven = 'четное';
                } else {
                  oddEven = 'нечетное';
                }
                return { number: el.number = el.number + 1, id: el.id, evenOdd: oddEven };
              }
            } else {
              return { number: el.number, id: el.id, evenOdd: el.evenOdd };
            }
          });
          setCounters(array);
        }
      }
    }
  }

  function reset(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    const elem: HTMLDivElement | null = e.currentTarget.closest('.card');
    let id1: string | undefined;
    if (elem) {
      id1 = elem.dataset.id;
      if (id1) {
        const array = counters.map((el) => {
          if (el.id === Number(id1)) {
            return { number: el.number = 0, id: el.id, evenOdd: 'четное' };
          } else {
            return { number: el.number, id: el.id, evenOdd: el.evenOdd };
          }
        });
        setCounters(array);
      }
    }
  }
  function deleteCounter(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void{
    const elem: HTMLDivElement | null = e.currentTarget.closest('.card');
    let id1: string | undefined;
    if (elem) {
      id1 = elem.dataset.id;
      if (id1) {
        const array = counters.filter((el) => {
          return el.id !== Number(id1);
        });
        const newArray = array.map((el)=>{
          if (el.evenOdd === 'нечетное') {
            return { id: el.id, number: el.number - 1, evenOdd: 'четное' };
          }
          return { id: el.id, number: el.number, evenOdd: el.evenOdd };
        });
        setCounters(newArray);
      }
    }
  }
  function findElement(i: number){
    return counters.find((el)=>el.id === i);
  }
  
  return (
    <div
      className={cn('container')}
    >
      <div className='delete' onClick={(e)=>{deleteCounter(e);}}>
        <AiOutlineClose className='icon'></AiOutlineClose>
      </div>
      <div className='number'>{findElement(id) ? findElement(id)?.number : null}</div>
      <div className='evenOdd'>
        Введённо <b> {findElement(id) ? findElement(id)?.evenOdd : null}</b> число{' '}
      </div>
      <div className='buttons'>
        <div className='add' onClick={(e) => calcNumber(e, '+')}>
          +
        </div>
        <div className='reset' onClick={(e) => reset(e)}>
          Reset
        </div>
        <div
          className={cn('minus', { disabled: findElement(id)?.number === 0 })}
          onClick={(e) => calcNumber(e, '-')}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default Counter;
