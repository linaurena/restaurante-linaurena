import './Item.scss';

function Item({ product }) {
    const { name, description, pictureUrl } = product

    return (
        <article className='card'>
            <h2 className='card__name'>{name}</h2>
            <p className='card__description'>{description} <span>Read more</span></p>
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