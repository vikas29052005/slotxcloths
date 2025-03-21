let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(${product} has been added to your cart!);
}

function viewCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartDetails = '';
        cart.forEach(item => {
            cartDetails += ${item.product} - $${item.price}\n;
        });
        alert(Your Cart:\n${cartDetails});
    }
}