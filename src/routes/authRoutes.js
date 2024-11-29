import { Router } from "express";
import { addReview, getReview, login, signup } from "../controller.js/authController.js";
const authRouter = Router()


authRouter.post(
    '/signup',
    (req,res)=>signup(req,res))

authRouter.post(
    '/login',(req,res)=>login(req,res))

authRouter.post(
     '/addReview',(req,res)=>addReview(req,res))

authRouter.get(
   '/getReview',(req,res)=>getReview(req,res))
   
   
export default authRouter