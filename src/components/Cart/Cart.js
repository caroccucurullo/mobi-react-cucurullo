import { useCartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Table, Container } from 'react-bootstrap';
//import './Cart.css'


function Cart() {
  const { cartList, addQuantity, total } = useCartContext();

  return (
    <Container style={{ marginTop: '20px' }}>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((c) => (
          <CartItem item={c} /> 
        ))}
        <tr>
          <th></th>
          <td>Cantidad total:</td>
          <td>{addQuantity()}</td>
          <td>Precio total:</td>
          <td>${total()}</td>
          </tr>
      </tbody>
    </Table>
    </Container>
    
  );
}

export default Cart;