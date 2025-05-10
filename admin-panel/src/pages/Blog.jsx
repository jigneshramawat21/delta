import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {

    const [formData, setFormData] = useState({ title: '', description: '', imageUrl: '' });
    const [blogs, setBlogs] = useState([]);

    const handleChangeData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if(formData._id) {

                const res = await axios.put(`http://localhost:5000/api/blogs/${formData._id}`, formData);
                setBlogs(blogs.map(bi => bi._id === formData._id ? res.data : bi));
            }

            else{
                const res = await axios.post('http://localhost:5000/api/blogs/', formData)
                setBlogs([...blogs, res.data]);
            }
        } catch (err) {
            console.log(err);
        }

        setFormData({ title: '', description: '', imageUrl: '' });
    }





    const getBlog = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/blogs/');
            setBlogs(res.data);

        }
        catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getBlog();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/blogs/${id}`);
            setBlogs(blogs.filter((blog) => blog._id !== id));


        } catch (err) {
            console.log(err);
        }

    }

    const handleUpdate = async (give) => {

        setFormData(give);
    }



    return (
        <>
            <h3>Blog</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" className="form-control mb-2" placeholder="Title" value={formData.title} onChange={handleChangeData} required />
                <textarea name="description" className="form-control mb-2" placeholder="Description" value={formData.description} onChange={handleChangeData} required></textarea>
                <input type="text" name="imageUrl" className="form-control mb-2" placeholder="Image URL" onChange={handleChangeData} value={formData.imageUrl} />
                <button className="btn btn-primary" type="submit">
                    {formData._id ? 'Update Blog' : 'Add Blog'}
                </button>

            </form>



            <table className="table table-bordered mt-5">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className='table table-bordered'>
                    {blogs.map(give => (
                        <tr key={give._id}>
                            <td>{give.title}</td>
                            <td>{give.description}</td>
                            <td><img src={give.imageUrl} alt='blog-img' width="100" /></td>
                            <td>
                            <button className='btn btn-danger me-4 mt-2' onClick={() => handleDelete(give._id)}>Delete</button> 
                            <button className='btn btn-danger  ' onClick={() => handleUpdate(give)}>Update</button>

                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Blog;