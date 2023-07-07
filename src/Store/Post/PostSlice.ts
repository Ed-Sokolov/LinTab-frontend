import {createSlice} from "@reduxjs/toolkit";
import {PostType} from "../../Types/Post/PostType";
import {createPost} from "../../API/PostApi";

const initState = {
    post: null as PostType | null
}

const postSlice = createSlice({
    name: 'posts',
    initialState: initState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createPost.fulfilled, (state, action) => {
                state.post = action.payload;
            })
            .addCase(createPost.rejected, (state, action) => {
                throw action.payload;
            })
    }
})

export default postSlice.reducer;