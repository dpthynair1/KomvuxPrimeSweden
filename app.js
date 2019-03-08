$(() => {
    const products = [
        { name: 'PS4', price: 4500, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/playstation.jpg', category: 'Elektronik' },
        { name: 'LG HomeTheatre', price:2000 , id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/tv.jpg', category: 'Elektronik' },
        { name: 'T-shirt', price: 59, id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/sports-and-sparkle.jpg', category: 'Children' },
        { name: 'Top', price: 250, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/dresses.jpg', category: 'Children' },
        { name: 'Doggy', price: 300, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/toy1.jpg', category: 'Toy' },
        { name: 'Cute Pup', price: 450, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/toy2.jpg' ,category: 'Toy' },
        { name: 'Apple', price: 9000, id: 7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/phone-1.jpg', category: 'Phone' },
        { name: 'S8', price: 8000, id: 8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/phone-2.jpg', category: 'Phone' },
        { name: 'Cricket set', price: 2500, id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/s-2.jpg', category: 'Sports' },
        { name: 'NBA-FootBall', price: 800, id: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: '/img/s-3.jpg', category: 'Sports' }
        
    ];
    
   // console.log(products);
let cart = [];
// (products, $('.product-list')
const appendList = (array, location) => {
// products.map
const template = array.map((item, id) => {
return `
<div class="card product d-inline-flex mt-4 mr-2 ml-2 border border-light rounded" style="width: 15rem;">
           <img src="${item.picture}" class="card-img-top" alt="${item.description}" style="width:100%; height: 200px;">
           <div class="card-body">
           <h5 class="card-title">${item.name} - <span class="category">${item.category}</span> <small>${item.price}<em>:-<em></small></h5>
           <p class="card-text">${item.description}</p>
           <button  class="ml-5" type="button" id="${item.id}">Shop Now</button>
           </div>
`;
    });
    $(location).html(template);
}


// addToCart(products, +id, $('.cart-list'))
const addToCart = (array, id, location) => {
    //a = product
    //id= button id
    //i.id = product id 
    let a = array.find(i => i.id === id);

    cart.push(a);
   // console.log(a);
    

    const item = `
    <li class="item" id="${a.id}">
    <h5>${a.name}</h5>
    <button type="button">Remove</button>
    </li>
    `;

    $('span.amount').text(cart.length);
    $(location).append(item);
}
// (cart,item)
const removeFromCart = (array, removedItem) => {
    array.splice(removedItem, 1);
}
// (cart, $('.cart-list')
const populateCart = (array, location) => {
    let item = `
    
    <li class"item" id="${array.id}">
    <h5>${array.name}</h5>
    <button type="button">Remove</button>
    </li>
    `;

    $('span.amount').text(array.length);
}

// params = (array,location)
appendList(products, $('.product-list'));

$('.product').on('click', 'button',(e) => {
    let id = e.currentTarget.id;
    // +id : + sign makes it a number
    addToCart(products, +id, $('.cart-list'));
});

$('.cart-list').on('click','button', (e) => {
    let item = $(e.currentTarget).closest('li').remove();
    removeFromCart(cart, item);
    populateCart(cart, $('.cart-list'));
});

$(document).ready(function() { 

    // check where the shoppingcart-div is 

    var offset = $('#shopping-cart').offset(); 

    $(window).scroll(function () {   

        var scrollTop = $(window).scrollTop();

        // check the visible top of the browser    

        if (offset.top<scrollTop) {

            $('#shopping-cart').addClass('fixed');

        } else {

            $('#shopping-cart').removeClass('fixed');  

        }

    });

});

});