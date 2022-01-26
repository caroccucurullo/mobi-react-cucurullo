import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import CartContextProvider from './context/CartContext';
import BuyerForm from './components/BuyerForm/BuyerForm';


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
            element={ <CartContainer />} 
          />
          <Route 
            exact
            path="/buyerForm"
            element={<BuyerForm/>}
          />
                 
        </Routes>
      </center>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
