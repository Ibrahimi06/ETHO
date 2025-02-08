function previewImage(event, imageId) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById(imageId).src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function addToCart(productName, productPrice) {
    const selectedSize = document.querySelector(`input[name="${productName}-size"]:checked`);
    if (selectedSize) {
        const productDetails = {
            name: productName,
            price: productPrice,
            size: selectedSize.value
        };
        // Simulate adding to cart and redirect to cart.html
        console.log("Added to cart:", productDetails);
        alert("Added to cart: " + JSON.stringify(productDetails));
        window.location.href = 'cart.html'; // Redirect to cart page
    } else {
        alert("Please select a size for " + productName + ".");
    }
}