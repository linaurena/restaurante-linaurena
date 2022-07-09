let products = [
    {id: '1', category: 'protein', name: 'meat', price: 6, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/demos/restaurant/resources/images/grilled-meat.jpg'},
    {id: '2', category: 'protein', name: 'chicken', price: 5, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/demos/restaurant/resources/images/grilled-chicken.jpg'},
    {id: '3', category: 'protein', name: 'fish', price: 8, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/demos/restaurant/resources/images/grilled-fish.jpg'},
    {id: '4', category: 'protein', name: 'veggie', price: 7, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/demos/restaurant/resources/images/vegan-meat.jpg'},
    {id: '5', category: 'protein', name: 'bacon', price: 4, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/demos/restaurant/resources/images/bacon.jpg'},
    {id: '6', category: 'protein', name: 'egg', price: 3, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/demos/restaurant/resources/images/fried-egg.png'},
    {id: '7', category: 'protein', name: 'ham', price: 2, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/demos/restaurant/resources/images/ham.png'},
    {id: '8', category: 'protein', name: 'beef', price: 8, description: 'This protein is low in fat. This protein is one of life’s simplest pleasures.', pictureUrl:'https://linaurena.com/demos/restaurant/resources/images/beef.png'},
    {id: '9', category: 'vegetables', name: 'vegetable1', price: 0, description: 'This vegetable is too fresh. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '10', category: 'vegetables', name: 'vegetable2', price: 0, description: 'This vegetable is too fresh. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '11', category: 'vegetables', name: 'vegetable3', price: 0, description: 'This vegetable is too fresh. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '12', category: 'vegetables', name: 'vegetable4', price: 0, description: 'This vegetable is too fresh. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '13', category: 'vegetables', name: 'vegetable5', price: 0, description: 'This vegetable is too fresh. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '14', category: 'vegetables', name: 'vegetable6', price: 0, description: 'This vegetable is too fresh. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '15', category: 'vegetables', name: 'vegetable7', price: 0, description: 'This vegetable is too fresh. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '16', category: 'vegetables', name: 'vegetable8', price: 0, description: 'This vegetable is too fresh. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '17', category: 'fruits', name: 'fruit1', price: 0, description: 'This fruit is really nutritive. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '18', category: 'fruits', name: 'fruit2', price: 0, description: 'This fruit is really nutritive. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '19', category: 'fruits', name: 'fruit3', price: 0, description: 'This fruit is really nutritive. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '20', category: 'fruits', name: 'fruit4', price: 0, description: 'This fruit is really nutritive. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '21', category: 'fruits', name: 'fruit5', price: 0, description: 'This fruit is really nutritive. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '22', category: 'fruits', name: 'fruit6', price: 0, description: 'This fruit is really nutritive. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '23', category: 'fruits', name: 'fruit7', price: 0, description: 'This fruit is really nutritive. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '24', category: 'fruits', name: 'fruit8', price: 0, description: 'This fruit is really nutritive. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '25', category: 'sauce', name: 'sauce1', price: 0, description: 'This a delicious sauce. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '26', category: 'sauce', name: 'sauce2', price: 0, description: 'This a delicious sauce. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '27', category: 'sauce', name: 'sauce3', price: 0, description: 'This a delicious sauce. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '28', category: 'sauce', name: 'sauce4', price: 0, description: 'This a delicious sauce. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '29', category: 'sauce', name: 'sauce5', price: 0, description: 'This a delicious sauce. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '30', category: 'sauce', name: 'sauce6', price: 0, description: 'This a delicious sauce. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '31', category: 'sauce', name: 'sauce7', price: 0, description: 'This a delicious sauce. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'},
    {id: '32', category: 'sauce', name: 'sauce8', price: 0, description: 'This a delicious sauce. This is one of life’s simplest pleasures', pictureUrl: 'https://linaurena.com/demos/restaurant/resources/images/default.png'}
]

export const gFetch = new Promise(( resolve, reject ) => {
    let condition = true;
    condition ? setTimeout(() => { resolve(products) }, 5000) : reject('not found')
})

export const getItems = new Promise(( resolve, reject ) => {
    let conditionDetail = true;
    conditionDetail ? setTimeout(() => { resolve(products) }, 2000) : reject('not found')
})