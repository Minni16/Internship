import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    transactions: [],
    filterRangeDays: 0
}

// Create context - makes data accessible to all components.
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function setFilterRangeDays(days) {
        dispatch({
            type: 'SET_FILTER_RANGE_DAYS',
            payload: days
        });
    }

    const today = new Date();
    const startDate = state.filterRangeDays > 0
        ? new Date(today.getFullYear(), today.getMonth(), today.getDate() - state.filterRangeDays + 1)
        : null;

    const filteredTransactions = state.filterRangeDays > 0
        ? state.transactions.filter(t => {
            const d = new Date((t.date || '').slice(0,10));
            if (isNaN(d.getTime())) return false;
            // include transactions from startDate to today inclusive
            return d >= startDate && d <= today;
        })
        : state.transactions;

    return (<GlobalContext.Provider value={{ // sharing the data
        transactions: state.transactions,
        filteredTransactions,
        filterRangeDays: state.filterRangeDays,
        deleteTransaction,
        addTransaction,
        setFilterRangeDays
    }}>
        {/* children le aba mathi value ma vako sabai access garna pauxa */}
        {children} 
    </GlobalContext.Provider>);
}
