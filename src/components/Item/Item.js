import { Link} from 'react-router-dom'
import { Card, Button } from "react-bootstrap";

function Item( {prod} ) {
    return (
        <div>
            key={prod.id}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.img} />
                <Card.Body>
                <Card.Title>{`${prod.nombre}`}</Card.Title>
                <Card.Text>
                $ {`${prod.precio}`}
                </Card.Text>
                <Link to={`/detalle/${prod.id}`}><Button variant="dark">Detalle del producto</Button></Link>
                </Card.Body>
            </Card>            
        </div>
    )
}

export default Item
