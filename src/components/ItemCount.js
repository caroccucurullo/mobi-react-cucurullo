import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
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

  return (
    <>
      <div>
        <button onClick={addItem}>+</button>
        <h3>{count}</h3>
        <button onClick={quitItem}>-</button>
      </div>
      <Button disable={count === 0} variant="dark" onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </>
  );
};
export default ItemCount;