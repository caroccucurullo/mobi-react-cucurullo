import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import { getFetch } from "../helpers/getFetch";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setProductos] = useState([]);
  console.log("item", item);

  const {id} = useParams()
/* 
  useEffect(() => {
    getFetch.then((res) => setItem(res)).catch((err) => console.log(err));
  });
 */
  useEffect(() => {
    if (id) {
        getFetch
        .then(resp => setProductos(resp.find(prod => prod.id === parseInt(id))))                
    }
}, [id])  

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};
export default ItemDetailContainer;