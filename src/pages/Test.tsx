import React, {useEffect, useState} from 'react';
import Post, {IPost} from "../components/posts/Post";
import Pagination from "../components/general/Pagination";
import posts from "../mobx/posts";
import {observer} from "mobx-react-lite";

const Test = observer(() => {
    // const dispatch = useDispatch();
    // const {fetchPosts, getPosts} = useContext(PostsListContext)

    const [selectedPosts, setSelectedPosts] = useState<number[]>([])
    const [inputName, setInputName] = useState('')
    const [inputBody, setInputBody] = useState('')
    const [filterByTitle, setFilterByTitle] = useState('')
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    // const posts = getPosts()

    const totalPage = Math.ceil(100 / 5);


    useEffect(() => {
        posts.fetchPosts(page, limit)
        // fetchPosts({
        //     page: page,
        //     limit: limit
        // });
    }, [page, limit]);

    const onPageChange = (newPage: number) => {
        posts.fetchPosts(
                newPage,
                limit,

        )
        setPage(newPage);
    };

    useEffect(() => {
        onPageChange(page);
    }, [page]);

    useEffect(() => {
        onPageChange(1);
    }, [limit]);


    const addPostItem = () => {
        // dispatch(addPost({ title: inputName, body: inputBody }));
        posts.addNewPost({ id: Date.now(), title: inputName, body: inputBody })
        setInputName('')
        setInputBody('')
    }

    const deletePostItem = (postId: number) => {
        posts.deletePost(postId)
        // dispatch(deletePost(postId));
    }

    const clearSelectedPosts = () => {
        // dispatch(deleteAllPosts(selectedPosts));
        posts.deleteAllPosts(selectedPosts)
        setSelectedPosts([]);
    }

    const toogleCheckbox = (postId: number) => {
        if(postId === -1){
            const allPostsIds = posts.posts.map((elem) => elem.id)
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
                   className="input-search mb-5"
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

                {posts.posts.length ? posts.posts?.filter((item) => {
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
            <Pagination
                limit={limit}
                page={page}
                totalPage={totalPage}
                onPageChange={onPageChange}
                setPage={setPage}
            />

            <div className="d-flex gap-3">
                <button className="btn btn-danger" onClick={clearSelectedPosts}>Delete all or chosen</button>
            </div>
        </div>
    );
});

export default Test;