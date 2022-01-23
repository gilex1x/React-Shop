const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_DATA_PRODUCTS':
			return {
				...state,
				productList: action.payload,
			};
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case 'REMOVE_FROM_CART':
			return {
				...state,
				cart: state.cart.filter((item) => item.productId != action.payload),
			};
		case 'GET_PRODUCT_DATA':
			return{
				...state,
				product: state.productList.filter((item) => item.productId == action.payload)[0],
			}
		default:
			return state;
	}
};

export default reducer;
