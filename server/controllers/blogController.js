const Blog = require('../models/Blog');


exports.createBlog = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;

   
    if (!title || !description) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const blog = new Blog({ title, description, imageUrl });
    await blog.save();

    res.status(201).json(blog);
  } catch (err) {
    console.error("Error creating blog:", err);
    res.status(500).json({ error: err.message }); 
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find(); 
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl },
      { new: true }
    );

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id); // ✅ You forgot to store the deleted blog

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
