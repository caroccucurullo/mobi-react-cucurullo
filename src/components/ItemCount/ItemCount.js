import { useState } from "react";
import { Button } from "react-bootstrap";
import './ItemCount.css';

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
      <div className="count m-3">
        <button onClick={quitItem}> - </button>
        <h4 className="m-3"> {count} </h4>
        <button onClick={addItem}> + </button>  
      </div>
      <Button disable={count === 0} variant="dark" onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </>
  );
};
export default ItemCount;