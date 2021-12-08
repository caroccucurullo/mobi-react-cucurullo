import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {

  const initial = 1
  const stock = 10


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = 'Hola soy ItemListContainer' />
      <ItemCount initial={initial} stock={stock} />
    </div>
  );
}

export default App;
