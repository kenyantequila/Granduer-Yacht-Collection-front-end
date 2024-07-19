import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      alert('Logged in successfully:', data);
      navigate('/homePage'); // Navigate to HomePage after successful login
    } catch (error) {
      alert('Failed to log in:', error.message);
    }
  };

  return (
    <div className="register-container">
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="form-button">Login</button>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
      <p>
        Are you an admin? <a href="/admin-login">Login here</a>
      </p>
    </form>
    </div>
  );
};

export default LoginForm;
