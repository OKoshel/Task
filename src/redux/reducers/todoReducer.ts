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
    void,
    { rejectValue: string }
>("posts/fetchPosts", async function (_, { rejectWithValue }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4');
    if (response.status === 200) {
        return response.data;
    } else {
        return rejectWithValue("Server Error");
    }
});



const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                body: action.payload.body
            };
            state.posts.push(newTodo);
        },
        deleteTodo: (state, action) => {
            const index = state.posts.filter((todo) => todo.id !== action.payload);

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
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
