import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    transactions: [
            // { id: 1, text: 'Flower', amount: -20 },
            // { id: 2, text: 'Salary', amount: 300 },
            // { id: 3, text: 'Book', amount: -10 },
            // { id: 4, text: 'Camera', amount: 150 }
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// Provider context
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

// Actions
function deleteTransaction(id) {
   dispatch({
      type: "Delete_Transaction",
      payload: id
   })
}

function addTransaction(transaction) {
  dispatch({
    type: "Add_Transaction",
    payload: transaction
  });
}
return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
 }}>
    {children}
 </GlobalContext.Provider>)
}