import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider from './components/CartContext/CartContext';


function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <center className="App">
        <NavBar />
        <Routes>
          <Route 
            exact
            path="/" 
            element={ <ItemListContainer greeting = 'Bienvenidos a MOBI' /> } 
          />
          <Route 
            exact
            path="/categoria/:idCategoria" 
            element={ <ItemListContainer greeting = 'Bienvenidos a MOBI' /> } 
          />                  
          <Route 
            exact
            path="/detalle/:id" 
            element={ <ItemDetailContainer />} 
          /> 
          <Route 
            exact
            path="/cart" 
            element={ <Cart />} 
          />
                 
        </Routes>
      </center>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
