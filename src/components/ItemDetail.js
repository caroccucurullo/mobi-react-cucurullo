import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const initial = 1
    const stock = 10
    
    return (
      <div>
        <h3>ItemDetail</h3>
        <h3>{item.nombre}</h3>
        <p>{item.categoria}</p>
        <img src={`${item.img}`} alt={`${item.img}`}></img>
        <Button variant="dark">Agregar al carrito</Button>
        <ItemCount initial={initial} stock={stock} />
      </div>
    );
  };
  export default ItemDetail;