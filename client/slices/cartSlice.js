import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.item = [...state.item, action.payload];
    },
    removeFromCart: (state, action) => {
        let newCart = [...state.item];
        let itemIndex = state.item.findIndex((item) => item.id === action.payload.id);
        
        if( itemIndex >= 0){
            newCart.splice(itemIndex, 1)}
        else{
            console.warn(`Cant remove product (id: ${action.payload.id}) as its not in cart!`)
        };
        state.item = newCart;
    },
    emptyCart: (state, action) => {
        state.item = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export const selectCartItem = state => state.cart.item;

export const selectCartItemsById = (state, id) => state.cart.item.filter(item =>item.id == id);

export const selectCartTotal = (state) => state.cart.item.reduce((total, item) =>total= total + item.price, 0);

export default cartSlice.reducer