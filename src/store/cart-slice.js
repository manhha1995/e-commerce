import {createSlice} from '@reduxjs/toolkit'

createSlice({
    name: 'card',
    cardInitialState: {
        items: [],
        totalAmount: 0,
    }
,
reducer: {
    addItemToCard(state, action) {
        const newItems = action.payload;
        const existingCardItem = state.items.find(item => item.id === newItems.id);
        if (!existingCardItem) {
            state.items.push({itemId: newItems.id,
                 price: newItems.price,
                amount: newItems.amount,
            totalPrice: newItems.totalPrice,
        name: newItems.name});
        } else {
            existingCardItem.amount++;
            existingCardItem.price = newItems.price + existingCardItem.totalPrice
        }
    }
}})
