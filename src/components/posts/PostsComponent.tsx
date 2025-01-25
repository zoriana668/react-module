import {IPost} from "../../models/IPost.ts";
import {useEffect, useState} from "react";
import {postService} from "../../services/api.service.ts";
import {PostComponent} from "../post/PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getPosts().then((response) => {
            setPosts(response.posts);
        }).catch(err => {
            console.error('Error fetching posts', err);
        })
    }, []);

    return (
        <div>
            {posts.length > 0 ? (
                posts.map(post => <PostComponent key={post.id} postItem={post}/>)
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    );
};