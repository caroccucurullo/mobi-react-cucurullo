import { Link} from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import './Item.css';

function Item( {prod} ) {
    return (
        <div key={prod.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.img} />
                <Card.Body>
                <Card.Title>{`${prod.nombre}`}</Card.Title>
                <Card.Text>
                $ {`${prod.precio}`}
                </Card.Text>
                <Link to={`/detalle/${prod.id}`}><Button ClassName = 'card__button' variant="dark">Detalle del producto</Button></Link>
                </Card.Body>
            </Card>            
        </div>
    )
}

export default Item
