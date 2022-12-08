import {Post} from "../models/post.js";
let handleError = (res,error)=>{
    res.status(500).send(error);
}
let getPost = async (req,res)=>{
    try{
        let post = await Post.findById(req.params.id);
        res.status(200).json(post)
    }catch (error){
        handleError(res,error);
    }
};
let deletePost = async (req,res)=>{

    try{
        await Post.findOneAndDelete(req.params.id);
        res.status(200).json(req.params.id);
    }catch (error){
        handleError(res,error);
    }
};
let getPosts = async (req,res)=>{
    try{
        let posts = await Post.find().sort({createdAt:-1});
        res.status(200).json(posts);
    }catch (error){
        handleError(res,error);
    }
};
let addPost = async (req,res)=>{
    let {title,author,text} = req.body;
    let post = new Post({title,author,text})

    try{
        await post.save();
        res.status(200).json(post);
    }catch (error){
        handleError(res,error);
    }
};

let editPost = async (req,res)=>{
    let {title,author,text} = req.body;
    let {id} = req.params;
    try{
        let post = await Post.findByIdAndUpdate(id,{title,author,text});
        res.status(200).json(post)
    }catch (error){
        handleError(res,error);
    }
};
export {
    getPost,
    deletePost,
    getPosts,
    addPost,
    editPost
};