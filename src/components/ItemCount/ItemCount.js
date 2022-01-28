import { useState } from "react";
import { Button, Container } from "react-bootstrap";
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
      <Container className="count">
        <Button className= 'm-3' variant="dark" size="sm" onClick={quitItem}> - </Button>
        <h4 className="m-3"> {count} </h4>
        <Button className= 'm-3' variant="dark" size="sm"  onClick={addItem}> + </Button>  
      </Container>
      <Button disable={count === 0} variant="dark" onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </>
  );
};
export default ItemCount;