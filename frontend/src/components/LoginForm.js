import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            alert('Login successful');
            // Redirect to OTP verification page
        } else {
            alert(data.message);
        }
    };

    return (
        <div>
        <form onSubmit={handleLogin}>
            <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>
            <div>
             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>

            <button type="submit">Login</button>
        </form>   
        </div>

    );
};

export default LoginForm;