import { Router } from "express";
import { login, signup } from "../controller.js/authController.js";
const authRouter = Router()


authRouter.post(
    '/signup',
    (req,res)=>signup(req,res))

authRouter.post(
    '/login',(req,res)=>login(req,res))


export default authRouter