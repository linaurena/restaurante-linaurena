import { ItemCounter } from "../ItemListContainer/ItemCounter"

function ItemDetail({ product }) {
    const { name, price, description, pictureUrl } = product

    //console.log(name)
    //console.log(description)
    //console.log(pictureUrl)
    
    return (
        <article className='card'>
            <h2 className='card__name'>{name} <span>   ${price}</span> </h2>
                <p className='card__description'>{description}</p>
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
                <ItemCounter />
        </article>
    )
}

export default ItemDetail