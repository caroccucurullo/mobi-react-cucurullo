import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import { useState } from "react";
import  ButtonCustom from '../ButtonCustom/ButtonCustom';
import './BuyerForm.css'
import { Container } from 'react-bootstrap';



const BuyerForm = () => {

    const { deleteCart, total, cartList, addQuantity } = useCartContext();
  
    const [idOrder, setIdOrder] = useState('')
  
    const [dataForm, setDataForm] = useState({
        name:"", phone:"", email:"", emailConfirm:""
    })
  
    const handleChange = (e) => {
        setDataForm({...dataForm,
        [e.target.name]: e.target.value
        })
    }
    
    const generateOrder = (e) =>{
        e.preventDefault()
    
        let order = {}
            order.date = Timestamp.fromDate(new Date())
            order.buyer = dataForm
            order.total = total();
            order.totalQuantity = addQuantity()
            order.items = cartList.map(cartItem => {
                const id = cartItem.id;
                const nombre = cartItem.nombre;
                const quantity = cartItem.quantity;
                const precio = cartItem.precio * cartItem.quantity;
        
        return {id, nombre, quantity, precio}   
    })

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order)
    .then(resp => setIdOrder(resp.id))
    .catch(err => console.log(err))
    .finally(()=> {
      deleteCart()
      setDataForm({
        name:"", phone:"", email:"", emailConfirm:""
      })
  })

  }

  return (

    <Container className='form'>
        <h1>Completa el formulario de compra</h1>
    
            <form onSubmit={generateOrder}>
                <label>Nombre:</label><br/>
                <input className="mb-3"
                    type="text" name="name" placeholder="Nombre"  
                    pattern="[a-zA-ZñÑáéíóú'´ÁÉÍÓÚ ]{2,50}" 
                    onChange={handleChange} value={dataForm.name} 
                    size="35" required /> 
                <span className='span'>*</span> <br/>
                <label >Teléfono:</label><br/>
                <input className="mb-3"
                    type="text" name="phone" placeholder="Teléfono" 
                    pattern="[0-9]{7,15}" 
                    onChange={handleChange} value= {dataForm.phone} 
                    size="35" required /> 
                <span className='span'>*</span> <br/>
                <label>Correo electrónico:</label><br/>
                <input className="mb-3"
                    type="email" name="email" placeholder="Ingrese su correo electronico" 
                    onChange={handleChange} value={dataForm.email} 
                    size="35" required /> 
                <span className='span'>*</span> <br/>
                <label>Confirmar correo electrónico</label><br/>
                <input className="mb-3"
                    type="email" name="emailConfirm" placeholder="Confirme su  correo electronico" 
                    onChange={handleChange}  value={dataForm.emailConfirm} 
                    size="35" required />
                <span className='span'>*</span> <br/>
                
                <p> * Completa los campos obligatorios</p>      
                
                {cartList.length !== 0 & dataForm.name !== "" & dataForm.phone !== "" & dataForm.email !== "" & dataForm.email === dataForm.emailConfirm 
                            ? <div><ButtonCustom text='Finalizar compra' /></div>
                            : <></>
                }
            </form>

    
    {idOrder.length !== 0 ? <div className=''> <h3>Gracias por elegirnos! </h3>
                                <p>La compra se ha realizado con éxito!</p>
                                <p>El núemero de orden de tu pedido es: {idOrder}</p>
                                <p><Link to="/"> 
                                     <ButtonCustom text='Realizar otra compra' />
                                  </Link> 
                                </p>
                            </div>
                         : <Link to="/">
                                 <ButtonCustom text='Continuar comprando MOBIs' />
                           </Link>
    }
    </Container>

    )
}

export default BuyerForm;

