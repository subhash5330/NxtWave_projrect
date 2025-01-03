
import OTPForm from './components/OTPForm';
import ThankYouPage from './components/ThankYouPage';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
    const [isLogForm, setIsLogForm] = useState(true); // Tracks the active page

    const handleSwitchToRegister = () => setIsLogForm(false);
    const handleSwitchToLogin = () => setIsLogForm(true);

    return (
        <div>
            {isLogForm ? (
                <>
                <h1>Welcome to the Login</h1>
                    <LoginForm />
                    <button onClick={handleSwitchToRegister}>Create Account</button>
                </>
            ) : (
                <>
                <h1>Registration System</h1>
                    <RegisterForm />
                    <button onClick={handleSwitchToLogin}>Back to Login</button>
                </>
            )}
        </div>
    );
}

export default App;
