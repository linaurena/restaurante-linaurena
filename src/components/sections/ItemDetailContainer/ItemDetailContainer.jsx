import { getItems } from '../../../helpers/getFetch';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams();
  //console.log( itemId)

  useEffect(() => {
    if (itemId) {
        getItems // Simulate an API call
        .then(response => setProducts( response.filter( item => item.id === itemId ) ))
        .catch(error => console.log( error ))
        .finally(()=> setLoading( false ))
    } else {
        getItems // Simulate an API call
        .then(response => setProducts( response ))
        .catch(error => console.log( error ))
        .finally(()=> setLoading( false ))
    }
}, [itemId])

  return (
    <section className='category-section'>
        { loading ? <h1 className='loader'>Hi, this a detail loader ⏳</h1>
        :
        products.map(product => 
          <ItemDetail product={product} key={itemId} />
        )}
    </section>
  )
}

export default ItemDetailContainer