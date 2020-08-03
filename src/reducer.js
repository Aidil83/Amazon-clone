export const initialState = {
	basket: [
		{
			id: '123455',
			title:
				'Staples Hyken Technical Mesh Task Chair (Black) - Adjustable Office Chair with Breathable Mesh Material, Provides Lumbar, arm and Head Support.',
			price: 219.95,
			rating: 5,
			image: 'https://m.media-amazon.com/images/I/8189i6pt7aL._AC_UL320_.jpg',
		},
	],
	user: null,
};
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			// Logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			// Logic for Removing item from basket
			let newBasket = [...state.basket];

			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

			if (index >= 0) {
				// item exists in basket, remove it...
				newBasket.splice(index, 1);
			} else {
				console.warn(`Can't remove product (id: ${action.id}) as its not`);
			}

			return { ...state, basket: newBasket };
		default:
			return state;
	}
};
export default reducer;
