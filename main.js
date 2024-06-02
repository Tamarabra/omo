const open = document.querySelector('.cart-icon')
const close = document.querySelector('.close')
const sidemenu = document.querySelector('.sidemenu')

open.addEventListener('click', () => {
    if(sidemenu.classList.contains('okro')){
        sidemenu.classList.add('show')
        sidemenu.classList.remove('okro')
    }
})
close.addEventListener('click', () => {
    if(sidemenu.classList.contains('show')){
        // sidemenu.classList.add('unshow')
        sidemenu.classList.remove('show')
        sidemenu.classList.add('okro')
    }
})

const productEl = document.querySelector('.products')
function renderProducts(){
    products.forEach((product) =>{
        productEl.innerHTML += `
            <div class="items">
                <div class="item-container">
                    <div class="image">
                        <img src="./images/t1.png" alt="An iphone">
                    </div>
                    <div class="name">
                        <h3>Product 1</h3>
                    </div>
                    <div class="price">
                        &#8358;200
                    </div>
                    <div class="addtocart">
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        `
    })
}
renderProducts()

//dont forget open cart opacity