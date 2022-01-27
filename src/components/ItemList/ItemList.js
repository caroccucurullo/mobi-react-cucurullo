import { Container } from 'react-bootstrap';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList( {products} ) {
    return (
        <Container className ="grid">
            { products.map((prod) => <Item prod = {prod} />)  }
        </Container>

    )
}

export default ItemList
