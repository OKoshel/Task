import {IPost} from "../components/posts/Post";

export interface IPropsChildren {
    children: React.ReactNode;
}

export interface IPostsState{
    posts: IPost[],
    loading: boolean,

}

//////////contexts

export interface IPostListContext{
    fetchPosts: any
    getPosts: () => IPost[]

}

export interface ICartContext{
    getCartCount: () => number
    getSelectedProducts: () => IProduct[]
    getCartSummary: () => number
}

///////////////

export interface PaginationQuery{
    page: number,
    limit: number
}

export interface IProduct{
    id: number,
    image: string,
    name: string,
    price: number
}

export interface ICartState{
    selectedProducts: IProduct[],
    loading: boolean,
    summaryPrice: number

}