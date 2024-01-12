import {IPost} from "../components/Post";

export interface IPropsChildren {
    children: React.ReactNode;
}

export interface IPostsState{
    posts: IPost[],
    loading: boolean,

}

export interface IPostListContext{
    fetchPosts: any
    getPosts: () => IPost[]

}

export interface PaginationQuery{
    page: number,
    limit: number
}