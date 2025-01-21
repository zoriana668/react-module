import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postServices} from "../services/api.service.ts";
import {IPost} from "../models/IPost.ts";
import {PostsComponent} from "../components/posts/PostsComponent.tsx";

export const PostsPage = () => {

    const {userId} = useParams();

    return (
    <div>
        {userId && <PostsComponent userId={userId}/>}
    </div>
    );
};
