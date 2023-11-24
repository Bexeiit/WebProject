// Searchbar opener
const searchbar = document.getElementById('search');
const searchButton = document.querySelector('.fa-magnifying-glass');
let isSearchbarVisible = false;

searchButton.addEventListener('click', toggleSearchbar);

function toggleSearchbar(e) {
    e.preventDefault()
    if (isSearchbarVisible) {
        hideSearchbar();
    } else {
        showSearchbar();
    }
}
function showSearchbar() {
    searchbar.style.display = "flex";
    searchbar.style.opacity = "1";
    // searchbar.style.marginTop = "2%";
    isSearchbarVisible = true;
}
function hideSearchbar() {
    searchbar.style.display = "none";
    searchbar.style.opacity = "0";
    // searchbar.style.marginTop = "0";
    isSearchbarVisible = false;
}

// Cart opener
const shoppingCart = document.getElementById('shopping-cart')
const shopButton = document.querySelector('.fa-cart-shopping')
let isShoppingCartInView = true;

shopButton.addEventListener('click', (event) => {
    event.preventDefault()
    if(isShoppingCartInView) {
        shoppingCart.style.right = "0"
        isShoppingCartInView = false
    }else {
        shoppingCart.style.right = "-50%"
        isShoppingCartInView = true
    }
});

// Cart Close Button
const cartCloseButton = document.querySelector('.fa-x')
cartCloseButton.style.cursor = "pointer"

cartCloseButton.addEventListener('click', () => {
    if(!isShoppingCartInView) {
        shoppingCart.style.right = "-50%"
        isShoppingCartInView = true
    }
})

