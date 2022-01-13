//import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import { useCartContext } from './CartContext';
//import { Link } from 'react-router-dom';
import {  addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react"



const Cart = () => {
  
  const [idOrder, setIdOrder] = useState('')
  
  const [dataForm, setDataForm] = useState({
    name:"", email:"", phone:""
  })
  
  const { borrarItem, borrarCarrito, total, cartList } = useCartContext();
  
  const handleChange = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
      })
  }
  console.log(dataForm)

  
  const generarOrden = (e) =>{
    e.preventDefault()    
    // Nuevo objeto    
    let orden = {}
    orden.date = Timestamp.fromDate(new Date())
    orden.buyer = dataForm
    orden.total = total();
    orden.items = cartList.map(cartItem => {
        const id = cartItem.id;
        const nombre = cartItem.nombre;
        const precio = cartItem.precio * cartItem.cantidad;
        
        return {id, nombre, precio}   
    })

    // Generar la orden 
    const db = getFirestore()
    const ordenColeccion = collection(db, 'orders')
    addDoc(ordenColeccion, orden)
    .then(resp => setIdOrder(resp.id))
    .catch(err => console.log(err))
    .finally(()=> {
      borrarCarrito()
      setDataForm({
          name:"", email:"", phone:""
      })
  })

  }

  return (
      <div>
          {idOrder.length !== 0 && idOrder}
          {  cartList.map(prod=> <li>{prod.nombre}   {prod.cantidad}</li>) }
          <form 
              onSubmit={generarOrden} 
              onChange={handleChange} 
          >
            <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                /><br/>


            <button>Generar Orden</button>
          </form>
            <button onClick={borrarCarrito} >Vaciar Carrito</button>

        </div>
    )
}
/* 


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
                <th></th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th></th>
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
                  <td>{c.cantidad}</td>
                  <td>{c.precio * c.cantidad}</td>
                  <td>
                    <Button onClick={() => borrarItem(c.id)}>
                     Eliminar</Button>
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
              <button onClick={borrarCarrito}>
                Limpiar carrito
              </button>
            </Col>
          </Row>
        </Container>
        
      </>
    );
  }
};
 */
export default Cart;
