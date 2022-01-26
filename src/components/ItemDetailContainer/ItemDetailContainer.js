import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from '../Loading/Loading'

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [item, setItems] = useState([]);

  const {id} = useParams()
  
  useEffect(() => {

    const db = getFirestore()
            const queryDb = doc(db, 'items', id)
            getDoc(queryDb)
            .then(resp => setItems( { id: resp.id, ...resp.data() } ))
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))

}, [id])  

  return (
    <>
    {loading ? <Loading />
      
  :

    <div>
      <ItemDetail item={item} />
    </div>
    }
    </>
  );
};
export default ItemDetailContainer;