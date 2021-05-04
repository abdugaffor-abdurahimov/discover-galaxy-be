import express from "express";
import { PostController } from "../controllers";

const postsRouter = express.Router();

postsRouter.get("/", PostController.list);

export default postsRouter;
