import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [trainings, setTrainings] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/trainings/');
      setTrainings(res.data);
    } catch (err) {
      console.error('Error fetching trainings:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const res = await axios.put(`http://localhost:5000/api/trainings/${editId}`, formData);
        setTrainings(trainings.map(t => (t._id === editId ? res.data.training : t)));
        setEditId(null);
      } else {
        const res = await axios.post('http://localhost:5000/api/trainings/', formData);
        setTrainings([...trainings, res.data.training]);
      }

      setFormData({ title: '', description: '', imageUrl: '' });
    } catch (err) {
      console.error('Error saving training:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = (training) => {
    setFormData({
      title: training.title,
      description: training.description,
      imageUrl: training.imageUrl
    });
    setEditId(training._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/trainings/${id}`);
      setTrainings(trainings.filter(t => t._id !== id));
    } catch (err) {
      console.error('Error deleting training:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{editId ? "Edit Training" : "Add New Training"}</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="title"
          className="form-control mb-2"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          className="form-control mb-2"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="imageUrl"
          className="form-control mb-2"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <h3>All Trainings</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainings.map((training) => (
            <tr key={training._id}>
              <td>{training.title}</td>
              <td>{training.description}</td>
              <td><img src={training.imageUrl} alt={training.title} width="100" /></td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(training)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(training._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
