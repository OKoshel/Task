import React, {useContext, useEffect, useState} from 'react';
import Post, {IPost} from "../components/Post";
import {PostsListContext} from "../context/PostListContext";
import {useDispatch} from "react-redux";
import {deleteAllPosts, addPost, deletePost} from "../redux/reducers/todoReducer";

const Test = () => {
    const dispatch = useDispatch();
    const {fetchPosts, getPosts} = useContext(PostsListContext)

    useEffect(() => {
        fetchPosts()
    }, [])

    const posts = getPosts()


    const [selectedPosts, setSelectedPosts] = useState<number[]>([])
    const [inputName, setInputName] = useState('')
    const [inputBody, setInputBody] = useState('')
    const [filterByTitle, setFilterByTitle] = useState('')


    // useEffect(()=> {
    //     axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4').then((res) => {
    //         setPosts(res.data)
    //     })
    // }, [])

    const addPostItem = () => {
        dispatch(addPost({ title: inputName, body: inputBody }));
        setInputName('')
        setInputBody('')
    }

    const deletePostItem = (postId: number) => {
        dispatch(deletePost(postId));
    }

    const clearSelectedPosts = () => {
        dispatch(deleteAllPosts(selectedPosts));
        setSelectedPosts([]);
    }

    const toogleCheckbox = (postId: number) => {
        if(postId === -1){
            const allPostsIds = posts.map((elem) => elem.id)
            setSelectedPosts(allPostsIds.length === selectedPosts.length ? [] : allPostsIds )
        }
        else{
            setSelectedPosts((prevSelectedPosts) => {
                if(prevSelectedPosts.includes(postId)){
                    return prevSelectedPosts.filter((id) => id !== postId)

                }
                else{
                    return [...prevSelectedPosts, postId]

                }
            })

        }


    }

    return (
        <div>
            <input type="text"
                   placeholder="Filter by"
                   className="input mb-5"
                   value={filterByTitle}
                   onChange={(e) => setFilterByTitle(e.target.value)}
            />
            <div className="d-flex gap-3">
                <input
                    type="text"
                    placeholder="Add title"
                    className="input"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Add body"
                    className="input"
                    value={inputBody}
                    onChange={(e) => setInputBody(e.target.value)}
                />
                <button className="btn btn-success" onClick={addPostItem}>Add Post</button>
            </div>

            <div className="mt-3">
                <h2 className="mb-3">Post List</h2>
                <div className="d-flex gap-3 mb-4">
                    <input type="checkbox" onChange={() => toogleCheckbox(-1)}/>
                    <p>Selected All</p>
                </div>

                {posts.length ? posts?.filter((item) => {
                    return(
                        filterByTitle.toLowerCase() === '' ? item :  item.title.toLowerCase().includes(filterByTitle)
                    )}).map((post: IPost) => {
                    return <Post
                        key={post.id}
                        post={post}
                        deletePost={deletePostItem}
                        toogleCheckbox={toogleCheckbox}
                        isChecked={selectedPosts.includes(post.id)}
                    />
                }) : <div>Post list is empty</div>}

            </div>
            <div className="d-flex gap-3">
                <button className="btn btn-danger" onClick={clearSelectedPosts}>Delete all or chosen</button>
            </div>
        </div>
    );
};

export default Test;