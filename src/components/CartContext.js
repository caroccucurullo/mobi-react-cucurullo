import { createContext, useState, useContext } from 'react'


const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)  

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(item) {       
        const index = cartList.findIndex(i => i.id === item.id)
    
            if (index > -1) {
                const oldItem = cartList[index].cantidad
    
                cartList.splice(index, 1)

                setCartList([...cartList, { ...item, cantidad: item.cantidad + oldItem}])

                sumarCantidad(item);

            } else {
                setCartList([...cartList, item])
            }
    }

    const sumarCantidad = (counter, item) => {
        const cantidad = [...cartList];
        cantidad.forEach((c) => {
        c.id === item.id && (c.cantidad += counter);
        });

        setCartList(cantidad);
    };

    const total = () => {
        const sumaTotal = cartList.reduce((x, y) => x + y.precio * y.cantidad, 0);
        return sumaTotal;
    };

  
    const unidades = () => {
        const numeros = cartList.reduce((x, y) => x + y.cantidad, 0);
        return numeros;
    };


    const borrarItem = (item) => {
        const itemRemoved = cartList.filter((i) => i.id !== item);
        setCartList(itemRemoved);
    };

    function borrarCarrito() {
            setCartList([])
    }
    
return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            borrarItem,
            total,
            unidades,
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
