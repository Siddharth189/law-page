import { Router } from "express";
import {
  blogPost,
  updateBlog,
  getBlogs,
} from "../controller/blogs.controller.js";
const router = Router();

router.post("/blogs", blogPost);
router.get("/blogs", getBlogs);
router.delete("/blogs/:id", updateBlog);

export default router;
