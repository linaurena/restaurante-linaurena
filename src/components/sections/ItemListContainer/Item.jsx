import { Link } from 'react-router-dom';
import './Item.scss';

function Item({ product }) {
    const { id, name, description, pictureUrl } = product

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
                <button className='card__add-btn'>Add</button>
        </article>
    )
}

export default Item