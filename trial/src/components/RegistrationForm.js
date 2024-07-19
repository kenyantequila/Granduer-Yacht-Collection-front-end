import React, { useState } from 'react';
import './FormStyles.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/users/userlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register user');
      }

      const data = await response.json();
      alert('User registered successfully!');
    } catch (error) {
      console.error('Failed to register:', error.message);
    }
  };

  return (
    <div className="register-container">
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Register</h2>
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
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button type="submit" className="form-button">Register</button>
      <p>Already have an acount <a href="/login">Login here</a> </p>
    </form>
    </div>
  );
};

export default RegistrationForm;
