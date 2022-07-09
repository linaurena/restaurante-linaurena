
function ItemDetail({ item }) {
    const { name, price, description, pictureUrl } = item

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
                <button className='card__add-btn'>Add</button>
        </article>
    )
}

export default ItemDetail