import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';

function ItemListContainer ( { greeting } ) {
    const[products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)
    const { idCategoria } = useParams() 

    useEffect(() => {

    const db = getFirestore();
        if(idCategoria){
        const queryCollection = query(collection(db, 'items'), 
        where('categoria', '==', idCategoria)); 
        getDocs(queryCollection)
        .then(resp => {setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) );
        setLoading(false);})
        } else {
            const queryCollection = collection(db, 'items');
            getDocs(queryCollection)
            .then(resp => {setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) );
            setLoading(false);})
        }

}, [idCategoria]);

    return (
        <main className ='container'>
            <h1>{ greeting } </h1>
            { loading ? <Loading />
              :
              <ItemList products = {products}/>
            }
        </main>
    )
}

export default ItemListContainer
