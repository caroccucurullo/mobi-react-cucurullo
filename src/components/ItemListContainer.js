import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import { getFetch } from '../helpers/getFetch'
import ItemList from './ItemList'
import { collection, doc, getDoc, getFirestore, getDocs, query, where, limit } from 'firebase/firestore'

function ItemListContainer ( { greeting } ) {
  const[productos, setProductos] = useState([])
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
    console.log(productos)


useEffect(() => {

    const db = getFirestore();
        if(idCategoria){
        const queryCollection = query(collection(db, 'items'), 
        where('categoria', '==', idCategoria)); 
        getDocs(queryCollection)
        .then(resp => {setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) );
        setLoading(false);})
        } else {
            const queryCollection = collection(db, 'items');
            getDocs(queryCollection)
            .then(resp => {setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) );
        setLoading(false);})
        }

}, [idCategoria]);

    return (
        <div>
            { greeting }
            { loading ?
              <h2>...cargando</h2>
              :
              <ItemList productos = {productos}/>
            }
        </div>
    )
}

export default ItemListContainer
