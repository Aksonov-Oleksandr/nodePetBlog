import {createPath} from "../helpers/create-path.js";
let getContacts = (req,res)=>{
    const title = 'Contacts'
    res.render(createPath('contacts'),{title});
}
export {getContacts}