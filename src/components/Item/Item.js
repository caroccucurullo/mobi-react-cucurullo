import { Link} from 'react-router-dom'
import { Card, Button, Container } from "react-bootstrap";
import './Item.css';

function Item( {prod} ) {
    return (
        <Container key={prod.id}>
            <Card className='card h-100 shadow rounded'>
                <Card.Img className='card-img-top w-100' variant="top" src={prod.img} />
                <Card.Body>
                <Card.Title className="fs-3">{`${prod.nombre}`}</Card.Title>
                <Card.Text className="fs-4">
                $ {`${prod.precio}`}
                </Card.Text>
                <div>
                <Link to={`/detalle/${prod.id}`}><Button variant="dark">Detalle del producto</Button></Link>
                </div>
                </Card.Body>
            </Card>            
        </Container>
    )
}

export default Item
