import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {IPost} from "../../components/Post";
import {IPostsState} from "../../interfaces/Interfaces";


const initialState: IPostsState = {
    posts: [],
    loading: false
}

export const fetchPostsThunk = createAsyncThunk<
    IPost[],
    {page: number, limit:number},
    // PaginationQuery,
    { rejectValue: string }
>("posts/fetchPosts", async function ({page, limit}, { rejectWithValue }) {
    // const params = getUrlSearchParams(query);
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    if (response.status === 200) {
        return response.data;
    } else {
        return rejectWithValue("Server Error");
    }
});



const todoSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                title: action.payload.title,
                body: action.payload.body
            };
            state.posts.push(newPost);
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);

            },
        deleteAllPosts: (state, action) => {
            state.posts = state.posts.filter((post) => !action.payload.includes(post.id))

        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsThunk.pending, (state: IPostsState) => {
                  state.loading = true
            })
            .addCase(
                fetchPostsThunk.fulfilled,
                (state: IPostsState, action: PayloadAction<IPost[]>) => {
                    state.loading = false;
                    state.posts = action.payload;
                }
            )
    },
});
export const {addPost,deletePost, deleteAllPosts } = todoSlice.actions;
export default todoSlice.reducer;
