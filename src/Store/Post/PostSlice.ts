import {createSlice} from "@reduxjs/toolkit";
import {PostType} from "../../Types/Post/PostType";
import {createPost} from "../../API/PostApi";

const initState = {
    post: null as PostType | null,
    isLoading: false as boolean
}

const postSlice = createSlice({
    name: 'posts',
    initialState: initState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createPost.pending, state => {
                state.isLoading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
    }
})

export default postSlice.reducer;