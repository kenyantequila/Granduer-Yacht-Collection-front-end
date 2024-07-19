import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        capacity: '',
        price: '',
        image: '',
    });
    const [yachts, setYachts] = useState([]);
    const [selectedYacht, setSelectedYacht] = useState(null);

    useEffect(() => {
        fetchYachts();
    }, []);

    const fetchYachts = async () => {
        const response = await fetch('http://localhost:5000/yachts');
        const data = await response.json();
        setYachts(data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = selectedYacht ? 'PUT' : 'POST';
        const url = selectedYacht ? `http://localhost:5000/yachts/${selectedYacht.id}` : 'http://localhost:5000/admin/add-yacht';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save yacht');
            }

            alert('Yacht saved successfully');
            setFormData({
                name: '',
                description: '',
                capacity: '',
                price: '',
                image: '',
            });
            setSelectedYacht(null);
            fetchYachts();
        } catch (error) {
            alert('Failed to save yacht: ' + error.message);
        }
    };

    const handleEdit = (yacht) => {
        setSelectedYacht(yacht);
        setFormData({
            name: yacht.name,
            description: yacht.description,
            capacity: yacht.capacity,
            price: yacht.price,
            image: yacht.image,
        });
    };

    const handleDelete = async (yachtId) => {
        try {
            const response = await fetch(`http://localhost:5000/yachts/${yachtId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to delete yacht');
            }

            alert('Yacht deleted successfully');
            fetchYachts();
        } catch (error) {
            alert('Failed to delete yacht: ' + error.message);
        }
    };

    return (
        <div className="admin-dashboard">
            <h2>Welcome to the Admin Dashboard!</h2>

            <div className="admin-card">
                <h3>{selectedYacht ? 'Edit Yacht' : 'Add Yacht'}</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Capacity:
                        <input
                            type="number"
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">{selectedYacht ? 'Update Yacht' : 'Add Yacht'}</button>
                </form>
            </div>
               <h3>Yachts</h3>
            <div className="yacht-list">
                 <div className="yacht-cards">
                    {yachts.map((yacht) => (
                        <div className="yacht-card" key={yacht.id}>
                            <h4>{yacht.name}</h4>
                            <p>{yacht.description}</p>
                            <p>Capacity: {yacht.capacity}</p>
                            <p>Price: ${yacht.price}</p>
                            <img src={yacht.image} alt={yacht.name} width="200" />
                            <div className="yacht-actions">
                                <button onClick={() => handleEdit(yacht)}>Edit</button>
                                <button onClick={() => handleDelete(yacht.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
