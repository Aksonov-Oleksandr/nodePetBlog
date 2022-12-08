import {Post} from "../models/post.js";
import express from "express";
import {createPath} from "../helpers/create-path.js";
import {
    getPost,
    deletePost,
    getPosts,
    addPost,
    editPost
} from "../controllers/api-post-controller.js"
let postRoutes = express.Router();

postRoutes.get('/api/posts', getPosts);//Get all posts
postRoutes.post('/api/post', addPost);//Add new post
postRoutes.get('/api/post/:id', getPost);//Get post by id
postRoutes.delete('/api/post/:id',deletePost);//Delete post by id
postRoutes.put('/api/post/:id',editPost);//update post by id

export default postRoutes;