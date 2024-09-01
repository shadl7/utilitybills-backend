// Main router of dashboard
import express from "express";
import {loginService} from "../service/auth/login";
export const authRouter = express.Router();

authRouter.get("/auth", (req : express.Request, res: express.Response, next: express.NextFunction) => {

});