import {createSlice} from "@reduxjs/toolkit";
import {PostType} from "../../Types/Post/PostType";
import {createPost, getPopularPosts, getPosts} from "../../API/PostApi";

const initState = {
    posts: null as Array<PostType> | null,
    post: null as PostType | null,
    isLoading: false as boolean
}

const postSlice = createSlice({
    name: 'posts',
    initialState: initState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPosts.pending, state => {
                state.isLoading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
            .addCase(getPopularPosts.pending, state => {
                state.isLoading = true;
            })
            .addCase(getPopularPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(getPopularPosts.rejected, (state, action) => {
                state.isLoading = false;

                throw action.payload;
            })
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