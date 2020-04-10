new WOW().init(); //запуск анимации в момент отображения на экране

// const cartButton = document.getElementById('cart-button');
// const cartButton = document.querySelector('#cart-button');
const cartButton = document.querySelector('.button-basket');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click',(e)=>{
    // console.log(modal);
    modal.classList.add("is-open");

});

close.addEventListener('click',(e)=>{
    // console.log(modal);
    modal.classList.remove("is-open");

});

const toggleModal = ()=> {

}