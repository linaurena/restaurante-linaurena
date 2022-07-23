import { Link } from 'react-router-dom';
import './Item.scss';
//import { ItemCounter } from './ItemCounter';
//import { useContext } from 'react';
//import { CartContext } from '../../../context/cartContext';
//import { useState } from 'react';

function Item({ product }) {
    const { id, name, description, pictureUrl } = product
    
    //const [cart, addToCart] = useContext(CartContext);
    //const [quantity, setQuantity] = useState();

    //const counterFunction = (counter) => {
    //    setQuantity(counter)
    //    const prod = { item: product, quantity: quantity}
    //    //console.log('The value is ', counter)

     //   addToCart(prod)
    //}



//{quantity ? <Link to={'/cart'}><button>Finish</button></Link> : <ItemCounter stock={8} initialValue={0} onAdd={counterFunction}/>}

    return (
        <article className='card'>
            <h2 className='card__name'>{name}</h2>
                <p className='card__description'>{description} <Link to={`/detail/${id}`}><span>Read more</span></Link></p>
            <div 
                className='card__image' 
                style={{
                    backgroundImage: `url(${pictureUrl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} 
                alt="Img product">
            </div>
            
        </article>
    )
}

export default Item