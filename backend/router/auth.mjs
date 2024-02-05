import express from "express";


import {createError} from "../util/error.mjs";
import {register} from "../controller/auth/register.mjs";
import {login} from "../controller/auth/login.mjs";

const router = express.Router();

router.post("/register", register, createError);

router.post("/login", login, createError);



export default { router };
