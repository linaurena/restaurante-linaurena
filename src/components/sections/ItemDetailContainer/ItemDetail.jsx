import { ItemCounter } from "../ItemListContainer/ItemCounter";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({ product }) {
    //const { name, price, description, pictureUrl } = product

    //console.log(name)
    //console.log(description)
    //console.log(pictureUrl)

    const [cart, addToCart] = useContext(CartContext);
    const [quantity, setQuantity] = useState();
    console.log(cart);

    const counterFunction = (counter) => {
        setQuantity(counter)
        const prod = { item: product, quantity: quantity, price: product.price, description: product.description}
        console.log('The value is ', counter)

        addToCart(prod)
    }
    
    return (
        <article className='card'>
            <h2 className='card__name'>{product.name} <span>   ${product.price}</span> </h2>
                <p className='card__description'>{product.description}</p>
            <div 
                className='card__image' 
                style={{
                    backgroundImage: `url(${product.pictureUrl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }} 
                alt="Img product">
            </div>
            {quantity ? <Link to={'/cart'}><button>Finish</button></Link> : <ItemCounter stock={8} initialValue={0} onAdd={counterFunction}/>}
        </article>
    )
}

export default ItemDetail