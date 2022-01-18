export const addToCart = (payload) => ({
    type: 'ADD_TO_CART',
    payload,
});

export const removeFromCart= payload =>({
    type: 'REMOVE_FROM_CART',
    payload,
});

export const setDataProducts=payload=>({
    type: 'SET_DATA_PRODUCTS',
    payload,
});



