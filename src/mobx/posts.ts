import {makeAutoObservable} from "mobx";
import {IPost} from "../components/posts/Post";
import axios from "axios";

class Posts{
    posts: IPost[] = []
    constructor() {
        makeAutoObservable(this)
    }

    fetchPosts(page: number, limit: number){
        axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`).then((res) => {
            if(res.status === 200){
                 return this.posts = res.data;
             }
             else {
                 return "Server Error";
             }
         })

    }

    addNewPost(newItem: IPost){
        this.posts = [...this.posts, newItem]

    }
    deletePost(id: number){
        this.posts = this.posts.filter((item) => item.id !== id)

    }
    deleteAllPosts(items: number[]){
        this.posts = this.posts.filter(post => !items.includes(post.id));

    }


}

export default new Posts()