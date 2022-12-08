import path from 'path';
import __dirname from "../__dirname.js";
let createPath = (page) => path.resolve(__dirname,'views',`${page}.ejs`)
export {createPath};