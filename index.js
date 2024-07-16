document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

    cartItems.forEach(item => {
        // Initial total price calculation
        const quantity = parseInt(item.querySelector('.quantity').innerText);
        const price = parseInt(item.querySelector('.price').innerText.replace('$', ''));
        totalPrice += quantity * price;

        // Event listeners for quantity buttons
        item.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const action = btn.getAttribute('data-action');
                const quantityElem = item.querySelector('.quantity');
                let quantity = parseInt(quantityElem.innerText);

                if (action === 'increase') {
                    quantity++;
                } else if (action === 'decrease' && quantity > 1) {
                    quantity--;
                }

                quantityElem.innerText = quantity;
                updateTotalPrice();
            });
        });

        // Event listener for delete button
        item.querySelector('.delete-btn').addEventListener('click', function() {
            item.remove();
            updateTotalPrice();
        });

        // Event listener for like button
        item.querySelector('.like-btn').addEventListener('click', function() {
            item.querySelector('.like-btn').classList.toggle('liked');
        });
    });

    // Function to update the total price
    function updateTotalPrice() {
        let newTotal = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').innerText);
            const price = parseInt(item.querySelector('.price').innerText.replace('$', ''));
            newTotal += quantity * price;
        });
        document.getElementById('total-price').innerText = newTotal;
    }

    // Initial total price update
    document.getElementById('total-price').innerText = totalPrice;
});
