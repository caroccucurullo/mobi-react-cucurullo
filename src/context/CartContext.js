import { createContext, useState, useContext } from 'react'


const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)  

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    function addCart (item) {       
        const index = cartList.findIndex(i => i.id === item.id)
    
            if (index > -1) {
                const oldItem = cartList[index].quantity
    
                cartList.splice(index, 1)

                setCartList([...cartList, { ...item, quantity: item.quantity + oldItem}])

            } else {
                setCartList([...cartList, item])
            }
    }

    /* const addQuantity = (counter, item) => {
        const quantity = [...cartList];
        quantity.forEach((c) => {
        c.id === item.id && (c.quantity += counter);
        });

        setCartList(quantity);
    };
 */

    function addQuantity(){
        const totalQuantity = cartList.map(prod =>prod.quantity).reduce((a,b)=>a+b, 0)
        return(
            totalQuantity
        )
    }

    const total = () => {
        const totalPrice = cartList.reduce((x, y) => x + y.precio * y.quantity, 0);
        return totalPrice;
    };

    const unidades = () => {
        const numbers = cartList.reduce((x, y) => x + y.quantity, 0);
        return numbers;
    }; 

    function deleteItem(id){
        const itemRemoved = cartList.filter(i => i.id !== id) 
        setCartList(itemRemoved)     
   }
    /* const deleteItem = (item) => {
        const itemRemoved = cartList.filter((i) => i.id !== item);
        setCartList(itemRemoved);
    }; */

    function deleteCart() {
            setCartList([])
    }
    
return (
        <CartContext.Provider value={{
            cartList,
            addCart,
            addQuantity,
            deleteCart,
            deleteItem,
            total,
            unidades,
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
