let products = [
    {id: '1', category: 'protein', name: 'meat', price: 6, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/restaurant/resources/images/grilled-meat.jpg'},
    {id: '2', category: 'protein', name: 'chicken', price: 5, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/restaurant/resources/images/grilled-chicken.jpg'},
    {id: '3', category: 'protein', name: 'fish', price: 8, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/restaurant/resources/images/grilled-fish.jpg'},
    {id: '4', category: 'protein', name: 'veggie', price: 7, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/restaurant/resources/images/vegan-meat.jpg'},
    {id: '5', category: 'protein', name: 'bacon', price: 4, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/restaurant/resources/images/bacon.jpg'},
    {id: '6', category: 'protein', name: 'egg', price: 3, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/restaurant/resources/images/fried-egg.png'},
    {id: '7', category: 'protein', name: 'ham', price: 2, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/restaurant/resources/images/ham.png'},
    {id: '8', category: 'protein', name: 'beef', price: 8, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/restaurant/resources/images/beef.png'}
]

export const gFetch = new Promise(( resolve, reject ) => {
    let condition = true;
    condition ? setTimeout(() => { resolve(products) }, 5000) : reject('not found')
})