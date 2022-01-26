import React, { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link} from 'react-router-dom';
import { Card } from "react-bootstrap";
import { useCartContext } from "../CartContext/CartContext";


const ItemDetail = ({ item }) => {
    const [goCart, setGoCart] = useState(false);

    const {cartList , addCart}= useCartContext()

    const onAdd = (count) => {
      console.log(count);
      setGoCart(true);
      addCart ( {...item, quantity:count} ) 
  };

    const initial = 1

    console.log(cartList);  
     
    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <h3>{item.nombre}</h3>
        <p>{item.categoria}</p>
        <img src={`${item.img}`} alt={`${item.img}`}></img>
        <p>{item.precio}</p>
        <Link to="/">Seguir comprando</Link>
        {!goCart ? (
                <ItemCount initial={initial} stock={`${item.stock}`}  onAdd={onAdd} />
            ) : (
                <Link to="/cart">Ir al carrito</Link>
            )}
        
        </Card>
      </div>
      
    );
  };
  export default ItemDetail;