import { db } from "../firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const blogsCollection = collection(db, "blogs");

export const blogPost = async (req, res) => {
  const blog = req.body;

  try {
    const docRef = await addDoc(blogsCollection, blog);
    console.log("Blog added with ID: ", docRef.id);
    res.status(200).send({ message: "Blog added successfully", id: docRef.id });
  } catch (error) {
    console.error("Error adding blog: ", error);
    res.status(500).send("Error adding blog");
  }
};

export const getBlogs = async (req, res) => {
  try {
    const querySnapshot = await getDocs(blogsCollection);
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).send(blogs);
  } catch (error) {
    console.error("Error fetching blogs: ", error);
    res.status(500).send("Error fetching blogs");
  }
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const blogDoc = doc(db, "blogs", id);
    await updateDoc(blogDoc, updatedData);
    res.status(200).send({ message: "Blog updated successfully" });
  } catch (error) {
    console.error("Error updating blog: ", error);
    res.status(500).send("Error updating blog");
  }
};
