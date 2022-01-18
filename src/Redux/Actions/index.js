export const addToCart = (payload) => ({
    type: 'ADD_TO_CART',
    payload,
});

export const removeFromCart= payload =>({
    type: 'REMOVE_FROM_CART',
    payload,
});

export const getProducts=payload=>({
    type: 'GET_PRODUCTS',
    payload,
})
