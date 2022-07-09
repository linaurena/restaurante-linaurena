import { getItems } from '../../../helpers/getFetch';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams();
  //console.log( itemId)

  useEffect(() => {
    if (itemId) {
        getItems // Simulate an API call
        .then(response => setDetails( response.filter( item => item.id === itemId ) ))
        .catch(error => console.log( error ))
        .finally(()=> setLoading( false ))
    } else {
        getItems // Simulate an API call
        .then(response => setDetails( response ))
        .catch(error => console.log( error ))
        .finally(()=> setLoading( false ))
    }
}, [itemId])

  return (
    <section className='category-section'>
        { loading ? <h1 className='loader'>Hi, this a detail loader ⏳</h1>
        :
        details.map(detail => 
          <ItemDetail item={detail} key={itemId} />
        )}
    </section>
  )
}

export default ItemDetailContainer