import React, { useState,useEffect } from 'react';
import { loginUser } from '../api/api';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() =>{
    const fetchLogInUser = async() =>{
      try {
        const response = await loginUser(username, password);
        console.log('Logged in successfully:', response);
      } catch (error) {
        console.error('Failed to log in:', error.message);
      }
    }
    fetchLogInUser();
  }
  )
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Example login API call
    try {
      const response = await fetch('', {
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

      console.log('Login successful');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </form>
  );
};

export default LoginForm;
