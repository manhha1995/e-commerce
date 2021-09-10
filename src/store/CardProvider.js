/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useReducer } from "react";

import CardContext from './cart-context'


const defaultCartState = {
    items: [],
    totalAmount: 0,
}
const cardReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        
        const existingCardIndex = state.items.findIndex(item => item.id === action.item.id)
    }
    const existingCardItem = state.items[existingCardIndex]
    let updatedItems

    if (existingCardItem) {
        const updatedItem = {
            ...existingCardItem,
            amount: existingCardItem.amount + action.item.amount
        }
        updatedItems[existingCardIndex] = updatedItem
    } else {
        updatedItems = state.items.concat(action.item)
    }

    return {
        items: updatedItems,
        amount: updatedTotalAmount
    }
}

const CardProvider = (props) => {
    const addItemToCard = (item) => {}
    const removeItemFromCard = (id) => {}

    const cardContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCard,
        removeItem: removeItemFromCard
    }

    const cardInitialState = useReducer(cardReducer, defaultCartState);

    return (
        <CardContext.Provider value={cardContext}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardProvider