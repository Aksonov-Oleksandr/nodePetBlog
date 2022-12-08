import {Post} from "../models/post.js";
import express from "express";
import {createPath} from "../helpers/create-path.js";
import {
    getPost,
    deletePost,
    getPosts,
    addPost,
    getAddPost,
    getEditPost,
    editPost
} from "../controllers/post-controller.js"
let postRoutes = express.Router();
postRoutes.get('/posts/:id', getPost);
postRoutes.delete('/posts/:id',deletePost);
postRoutes.get('/posts', getPosts);
postRoutes.post('/add-post', addPost);
postRoutes.get('/add-post', getAddPost);
postRoutes.get('/edit-post/:id', getEditPost);
postRoutes.put('/edit-post/:id',editPost);
export default postRoutes;