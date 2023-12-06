import { createSlice } from '@reduxjs/toolkit';




// Slice oluşturma
const counterSlice = createSlice({
  name: 'CardItem',
  initialState: {
    CardItem: [],
    CargoPrice: 30,
  },
  reducers: {
    takeCard: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.CardItem.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
      } else {
        state.CardItem.push(newItem);
      }
    },
    incrementQuantity: (state, action) => {
      const index = action.payload;
      if (state.CardItem[index]) {
        state.CardItem[index].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const index = action.payload;
      if (state.CardItem[index] && state.CardItem[index].quantity > 1) {
        state.CardItem[index].quantity -= 1;
      }
    },
  },
});
// Export slice actions ve reducer
export const { takeCard, incrementQuantity, decrementQuantity } = counterSlice.actions;
export default counterSlice.reducer;


