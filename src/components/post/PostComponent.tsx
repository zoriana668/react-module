import {FC} from "react";
import {IPost} from "../../models/IPost.ts";
import './PostComponent.css';

type PostTypeProps = {
    postItem: IPost;
}

export const PostComponent:FC<PostTypeProps> = ({postItem}) => {
    return (
        <div className={'post-block'}>
            <p className={'post-title'}>"{postItem.title}..."</p>
        </div>
    )
}