import { Table, Container, Row, Col } from 'react-bootstrap';
import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import  ButtonCustom from '../ButtonCustom/ButtonCustom';


const Cart = () => {
  
  const { deleteItem, deleteCart, total, cartList } = useCartContext();
  
  if (total() === 0) {
    return (
      <Container className="mt-5 mb-5">
        <Row style={{ margin: '0 auto' }}>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center align-content-center m-auto"
          >
            <h4>Agregá MOBIs a tu carrito</h4>
            <Link to={'/'}>
              <button>Ir a la página principal</button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <>
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
                <tr key={c.id}>
                  <td>
                    <img src={c.img} alt="producto"/>
                  </td>
                  <td>{c.nombre}</td>
                  <td>{c.precio}</td>
                  <td>{c.quantity}</td>
                  <td>$ {c.precio * c.quantity}</td>
                  <td>
                    <ButtonCustom text = 'Eliminar' onClick={() => deleteItem (c.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Container>
          <Row>
            <Col className="d-flex flex-row justify-content-end mb-5">
              <h4>Total ${total()}.-</h4>
              
                
              
            </Col>
            
          </Row>
          <Row>
          <Col className="d-flex flex-row mb-5">
          <Link to="/buyerForm">
                                                <ButtonCustom text='Finalizar compra' />
                                            </Link>
                                            <Link to="/">
                                                <ButtonCustom text='Continuar comprando' />
                                            </Link>
              <ButtonCustom text='Vaciar carrito' onClick={deleteCart} />
              </Col>
          </Row>
        </Container>
        
      </>
    );
  }
};

export default Cart;
