import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Pizza } from '../../routes/Home';

export interface CartState {
  totalPrice: number;
  items: Array<Pizza>;
}

const initialState: CartState = {
  totalPrice: 0,
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
        state.items.push(action.payload)
    }
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
