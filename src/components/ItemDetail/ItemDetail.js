import React, { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link} from 'react-router-dom';
import { Card, Container, Button } from "react-bootstrap";
import { useCartContext } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [goCart, setGoCart] = useState(false);

    const { addCart }= useCartContext()

    const onAdd = (count) => {
      setGoCart(true);
      addCart ( {...item, quantity:count} ) 
  };
     
    return (
      <Container className='div-detail'>
        <Card className='card h-100 shadow rounded p-3' style={{ width: '18rem' }}>
        <h3>{item.nombre}</h3>
        <p>{item.categoria}</p>
        <img src={`${item.img}`} alt={`${item.img}`}></img>
        <p>{item.precio}</p>
        <Link to="/"> <Button className='m-2' variant="outline-dark">Seguir comprando</Button></Link>
        {!goCart ? (
                <ItemCount initial={1} stock={`${item.stock}`}  onAdd={onAdd} />
            ) : (
                <Link to="/cart"><Button variant="dark" size="sm">Ir al carrito</Button></Link>
            )}
        
        </Card>
      </Container>
      
    );
  };
  export default ItemDetail;