import express from "express";
import {getContacts} from "../controllers/contacts-controller.js";
let contactsRoute = express.Router();
contactsRoute.get('/contacts',getContacts);
export default contactsRoute;