import { Link } from 'react-router-dom';
import './Item.scss';
import { ItemCounter } from './ItemCounter';

function Item({ product }) {
    const { id, name, description, pictureUrl } = product

    const counterFunction = (counter) => {
        console.log('The value is ', counter)
    }

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
            <ItemCounter stock={8} initialValue={0} onAdd={counterFunction}/>
        </article>
    )
}

export default Item