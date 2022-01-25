import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList/ItemList'
import Loading from './Loading/Loading'
import { collection, doc, getDoc, getFirestore, getDocs, query, where, limit } from 'firebase/firestore'

function ItemListContainer ( { greeting } ) {
  const[products, setProducts] = useState([])
  const[loading, setLoading] = useState(true)

  const { idCategoria } = useParams() 

  /* useEffect(() => {
    if (idCategoria) {
        getFetch
        .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria))) 
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))            
    } else {
        getFetch
        .then(resp => setProductos(resp)) 
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))               
    }
}, [idCategoria])   */

   /*  useEffect(() => {

        const db = getFirestore()
        const queryDb = doc(db, 'items', 'Xh8dsEKQzkQDLOrKrnNL')
        getDoc(queryDb)
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ))

    }, [idCategoria]) 
 */
    console.log(products)


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
