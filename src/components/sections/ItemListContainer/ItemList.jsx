import './ItemList.scss';
import { gFetch } from '../../../helpers/getFetch';
import { useState, useEffect } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';

function ItemList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) {
            gFetch // Simulate an API call
            .then(response => setProducts( response.filter( product => product.category === categoryId ) ))
            .catch(error => console.log( error ))
            .finally(()=> setLoading( false ))
        } else {
            gFetch // Simulate an API call
            .then(response => setProducts( response ))
            .catch(error => console.log( error ))
            .finally(()=> setLoading( false ))
        }
    }, [categoryId])

    return (
        <section className='category-section'>
            { loading ? <h1 className='loader'>Hi, this is a loader ⏳</h1>
            :
            products.map(product => 
                <Item product={product} key={product.id} />
            )}
        </section>
    )
}

export default ItemList