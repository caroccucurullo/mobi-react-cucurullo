import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart';

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {

  return (
    <BrowserRouter>
      <center className="App">
        <NavBar />
        <Routes>
          <Route 
            exact
            path="/" 
            element={ <ItemListContainer greeting = 'Hola soy ItemListContainer' /> } 
          />
          <Route 
            exact
            path="/categoria/:idCategoria" 
            element={ <ItemListContainer greeting = 'Hola soy ItemListContainer' /> } 
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
  );
}

export default App;
