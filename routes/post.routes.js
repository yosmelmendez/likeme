import { Router } from "express";
import { createPost, getPost } from "../controllers/post.controller.js";

const router = Router();

router.get("/", getPost);
router.post("/", createPost);

export default router;
