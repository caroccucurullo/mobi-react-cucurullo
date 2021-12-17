import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";

const ItemDetail = ({ item }) => {
    const initial = 1
    const stock = 10
    
    return (
      <div>
        <Card style={{ width: '18rem' }}>
        <h3>{item.nombre}</h3>
        <p>{item.categoria}</p>
        <img src={`${item.img}`} alt={`${item.img}`}></img>
        <ItemCount initial={initial} stock={stock} />
        </Card>
      </div>
      
    );
  };
  export default ItemDetail;