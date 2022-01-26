import { useCartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import Cart from '../Cart/Cart';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
//import './CartContainer.css';

function CartContainer() {
    const {cartList, deleteCart} =useCartContext() 
 
     return (
        <div className ='container'>
            <h1>Carrito de Compras</h1>      
        
            {cartList.length === 0 ? <>
                                        <p>Agregá MOBIs a tu carrito</p>
                                        <Link to="/"> <ButtonCustom text='Continuar comprando' /></Link>
                                    </>
                                    :<> <Cart />
                                            <Link to="/buyerForm">
                                                <ButtonCustom text='Finalizar compra' />
                                            </Link>
                                            <Link to="/">
                                                <ButtonCustom text='Agregar mas productos' />
                                            </Link>
                                            <div onClick={deleteCart}>
                                                <ButtonCustom text='Vaciar Carrito' />
                                            </div> 
                                </>}
    </div>
)
}

export default CartContainer