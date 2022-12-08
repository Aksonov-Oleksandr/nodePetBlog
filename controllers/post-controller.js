import {Post} from "../models/post.js";
import {createPath} from "../helpers/create-path.js";
let handleError = (res,error)=>{
    console.log(error);
    res.render(createPath('error'),{title:'Error'});
}
let getPost = async (req,res)=>{
    const title = 'Post';
    try{
        let post = await Post.findById(req.params.id);
        res.render(createPath('post'),{post,title})
    }catch (error){
        handleError(res,error);
    }
};
let deletePost = async (req,res)=>{
    const title = 'Post';
    try{
        await Post.findOneAndDelete(req.params.id);
        res.sendStatus(200);
    }catch (error){
        handleError(res,error);
    }
};
let getPosts = async (req,res)=>{
    const title = 'Posts';
    try{
        let posts = await Post.find().sort({createdAt:-1});
        res.render(createPath('posts'),{posts,title});
    }catch (error){
        handleError(res,error);
    }
};
let addPost = async (req,res)=>{
    let {title,author,text} = req.body;
    let post = new Post({title,author,text})
    try{
        await post.save();
        res.redirect('/posts')
    }catch (error){
        handleError(res,error);
    }
};
let getAddPost =  (req,res)=>{
    const title = 'Add Post'
    res.render(createPath('add-post'),{title});
};
let getEditPost = async (req,res)=>{
    const title = 'Edit Post';
    try{
        let post = await Post.findById(req.params.id);
        res.render(createPath('edit-post'),{post,title})
    }catch (error){
        handleError(res,error);
    }
};
let editPost = async (req,res)=>{
    let {title,author,text} = req.body;
    let {id} = req.params;
    try{
        await Post.findByIdAndUpdate(id,{title,author,text});
        res.redirect(`/posts/${id}`)
    }catch (error){
        handleError(res,error);
    }
};
export {
    getPost,
    deletePost,
    getPosts,
    addPost,
    getAddPost,
    getEditPost,
    editPost
};