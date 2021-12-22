import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../helpers/getFetch'
import ItemList from './ItemList'

function ItemListContainer ( { greeting } ) {
  const[productos, setProductos] = useState([])
  const[loading, setLoading] = useState(true)

  const { idCategoria } = useParams() 

  useEffect(() => {
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
}, [idCategoria])  

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
