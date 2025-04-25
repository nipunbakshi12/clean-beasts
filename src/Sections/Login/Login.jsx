// Login.js
import React, { useState } from 'react';
import usersData from './Users'; // Importing the user data
import './styles.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const user = usersData.find(user => user.username === username && user.password === password);

        if (user) {
            // Handle successful login, for example, redirect to dashboard
            alert('Login Successful');
        } else {
            alert('Invalid username or password');
        }
    };

    const handleSignup = () => {
        // Handle sign-up action, for example, navigate to sign-up page
        alert('Sign Up');
    };

    return (
        <div style={{
            width: '60%',
            margin: '20px auto'
        }}>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleLogin} style={{
                margin: '20px auto'
            }}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Login;
