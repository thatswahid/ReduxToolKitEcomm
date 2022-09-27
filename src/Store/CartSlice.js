import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  api_data: [],
}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    add: (state, { payload }) => {
      state.api_data.push(payload)
    },

    Remove: (state, { payload }) => {
      state.api_data=[...payload]
    },
    inc: (state, index) => {
      console.log(index , 'cartSlice')
      state.api_data.at(index.payload).qty += 1;
    }


  }
});

export const { add, Remove , inc } = CartSlice.actions

export default CartSlice.reducer