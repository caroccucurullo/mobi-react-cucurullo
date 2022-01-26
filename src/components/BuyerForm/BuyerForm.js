import { useCartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import {  addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore";
import { useState } from "react";
import  ButtonCustom from '../ButtonCustom/ButtonCustom';



const BuyerForm = () => {

    const { deleteCart, total, cartList } = useCartContext();
  
    const [idOrder, setIdOrder] = useState('')
  
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
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
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.quantity;
        
        return {id, nombre, precio}   
    })

    const db = getFirestore()
    const orderColection = collection(db, 'orders')
    addDoc(orderColection, order)
    .then(resp => setIdOrder(resp.id))
    .catch(err => console.log(err))
    .finally(()=> {
      deleteCart()
      setDataForm({
          name:"", email:"", phone:""
      })
  })

  }

  return (
      <div>
          {idOrder.length !== 0 && idOrder}
          {  cartList.map(prod=> <li>{prod.nombre}  {prod.quantity}</li>) }
          <form 
              onSubmit={generateOrder} 
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


            <ButtonCustom text = 'Generar Orden'/>
          </form>
            <ButtonCustom onClick={deleteCart} text = 'Vaciar Carrito' />

        </div>
    )
}

export default BuyerForm;

