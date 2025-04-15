import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case "ADD_TO_CART":
            // payload id'si ile cartItems'dan product'ı buluyoruz.
            const existingProductIndex = state.cartItems.findIndex(c => c.product.id === payload.id);

            // Eğer bulursak quantity'sini arttırıyoruz. 
            if (existingProductIndex !== -1) {
                const updatedCartItems = state.cartItems.map((item, index) => {
                    if (index === existingProductIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });

                return {
                    ...state,
                    cartItems: updatedCartItems
                };
            }

            // Eğer bulamazsak yeni bir ürün ekliyoruz.
            return {
                ...state,
                cartItems: [...state.cartItems, { quantity: 1, product: payload }]
            };

        case "REMOVE_FROM_CART":
            // payload ile gelen ürünün id'si eşleşen ürünü sepetten çıkarıyoruz.
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
            };

        default:
            return state;
    }
}
