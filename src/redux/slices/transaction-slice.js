import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transaction_loading: false,
    topup_loading: false,
    transactions: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setTransactionLoading: (state, action) => {
            state.transaction_loading = action.payload;
        },
        setTransactions: (state, action) => {
            state.transactions = action.payload;
        },
        setTopupLoading: (state, action) => {
            state.topup_loading = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { setTransactionLoading, setTransactions, setTopupLoading } = authSlice.actions;

export default authSlice.reducer;
