import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    common_loading: null,
    previous_screen: null
};

export const CommonSlice = createSlice({
    name: 'common',
    initialState,

    reducers: {
        setCommonLoading: (state, action) => {
            state.common_loading = action.payload;
        },
        setPreviousScreen: (state, action) => {
            state.previous_screen = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { setCommonLoading, setPreviousScreen } = CommonSlice.actions;

export default CommonSlice.reducer;
