import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    member_loading: false,
    edit_member_loading: false,
    members: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setMemberLoading: (state, action) => {
            state.member_loading = action.payload;
        },
        setEditMemberLoading: (state, action) => {
            state.edit_member_loading = action.payload;
        },
        setMembers: (state, action) => {
            state.members = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const { setMemberLoading, setMembers, setEditMemberLoading } = authSlice.actions;

export default authSlice.reducer;
