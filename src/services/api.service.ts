import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";

type UserResponse  = {
    users: IUser[];
}

export const userService = {
    getUsers: async (): Promise<UserResponse> => {
        return await fetch('https://dummyjson.com/users')
            .then(response => response.json())
    }
}

type PostResponse = {
    posts: IPost[];
}


export const postService = {
    getPosts: async(): Promise<PostResponse> => {
        return await fetch('https://dummyjson.com/posts')
            .then(response => response.json())
    }
}