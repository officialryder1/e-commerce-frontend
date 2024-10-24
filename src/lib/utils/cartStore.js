import { writable } from "svelte/store";

let storedCart = [];

// Check if runnung in the browser before accessing localStorage
if(typeof window !== 'undefined') {
    storedCart = JSON.parse(localStorage.getItem('cart')) || []
}
export const cart = writable(storedCart)




// Subscribe to cart changes and update localStorage

cart.subscribe((value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(value));
    }
});

// Cart add func
export const addToCart = (item) => {
    cart.update(currentCart => {
        // Check if item already exists
        const existingItem = currentCart.find(cartItem => cartItem.id === item.id)

        if(existingItem){
            existingItem.quantity += 1
        } else {
            item.quantity = 1
            currentCart = [...currentCart, item]
        }
        return currentCart
    })
}

// Func to remove cart item
export const removeFromCart = (itemId) => {
    cart.update(currentCart => {
        return currentCart.filter(item => item.id !== itemId)
    })
}