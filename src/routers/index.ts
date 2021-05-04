import express from "express";
import postsRouters from "./posts.routers";

const routers = express.Router();

routers.use("/posts", postsRouters);

export default routers;
