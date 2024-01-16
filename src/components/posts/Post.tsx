import React, {FC, HTMLAttributes} from 'react';
import item from "./Item";

export interface IPost{
    id: number,
    title: string,
    body: string
}

interface Props extends HTMLAttributes<HTMLDivElement>{
    post: IPost,
    isChecked: boolean,
    toogleCheckbox: (id: number) => void
    deletePost: (id: number) => void

}

const Post: FC<Props> = ({post, isChecked, toogleCheckbox, deletePost}) => {
    const checkboxId = `checkbox-${post.id}`;
    return (
        <div className="d-flex justify-content-between post align-items-center">

            <div className="d-flex gap-3">
                <input type="checkbox" id={checkboxId} className="custom-checkbox" checked={isChecked} onChange={() => toogleCheckbox(post.id)}/>
                <label htmlFor={checkboxId} className="checkbox-label"></label>
                <div>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>

            </div>
            <button className="btn btn-success h-100" onClick={() =>deletePost(post.id) }>Delete</button>


        </div>
    );
};

export default Post;