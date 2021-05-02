import posts from "./posts";

const router = require("express").Router();

router.use("/posts", posts);

export default router;
