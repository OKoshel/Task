import {useThunkDispatch} from "../redux/store";
import {fetchPostsThunk} from "../redux/reducers/todoReducer";
import {IPost} from "../components/Post";
import {PostsListContext} from "./PostListContext";
import {useAppSelector} from "../redux/hooks/redux";


export const PostListState = ({ children }: any) => {
    const thunkDispatch = useThunkDispatch();

    const fetchPosts = () => {
        return thunkDispatch(fetchPostsThunk());
    };

    const getPosts = (): IPost[] => {
        return useAppSelector((state) => state.posts.posts);
    };



    return (
        <PostsListContext.Provider
            value={{
                fetchPosts,
                getPosts,

            }}
        >
            {children}
        </PostsListContext.Provider>
    );
};
