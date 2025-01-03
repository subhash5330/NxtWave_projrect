import React, { useState } from 'react';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [image, setImage] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('company_name', companyName);
        formData.append('age', age);
        formData.append('dob', dob);
        formData.append('image', image);

        const response = await fetch('/api/user/register', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Registration successful');
        } else {
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" required />
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" required />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegisterForm;