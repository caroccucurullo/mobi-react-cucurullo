import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "./ItemDetail";
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [item, setProductos] = useState([]);
  console.log("item", item);

  const {id} = useParams()
  
  useEffect(() => {
    /* if (id) {
        getFetch
        .then(resp => setProductos(resp.find(prod => prod.id === parseInt(id))))                
    } */

    const db = getFirestore()
            const queryDb = doc(db, 'items', id)
            getDoc(queryDb)
            .then(resp => setProductos( { id: resp.id, ...resp.data() } ))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))

}, [id])  

  return (
    <>
    {loading ? 
      <h2>Cargando...</h2>
  :

    <div>
      <ItemDetail item={item} />
    </div>
    }
    </>
  );
};
export default ItemDetailContainer;