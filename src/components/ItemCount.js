import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const addItem = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const quitItem = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    const message = `Agregaste ${count} producto`;
    count === 1 ? alert(message) : alert(`${message}s`);
  };
  return (
    <>
      <h1>Voy a ser el contador</h1>
      <div>
        <button onClick={addItem}>+</button>
        <h3>{count}</h3>
        <button onClick={quitItem}>-</button>
      </div>
      <button onClick={onAdd}>Agregar al Carrito</button>
    </>
  );
};
export default ItemCount;

/* import React from 'react'
import {useCounter} from '../hooks/useCounter'

const ItemCount =  ( {initial} ) => {

    const {counter, increment, decrement, reset} = useCounter (initial)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment} >+</button>
            <button onClick={decrement} >-</button>
            <button onClick={reset} >Reset</button>
        </div>
    )
}

export default ItemCount */

