import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ''

const FormPrompt = () => {

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('name', name);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        if (username === localStorage.getItem('username', username) && password === localStorage.getItem('password', password)) {
            toast.success('Login success!', {
                position: "top-right",
                autoClose: 5000,
            });
        } else {
            toast.error('Login failed. Please check your credentials.', {
                position: "top-right",
                autoClose: 5000,
            });

        }
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h1>Signup</h1>

                <label htmlFor="name">Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

                <label htmlFor="username">Username:</label>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />

                <button type="submit">Submit</button>

            </form>

            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>

                <h1>Login</h1>
                <label htmlFor="username">Username:</label>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />

                <button type="submit">Submit</button>

            </form>

            <div>
                <h2>Welcome {name}!</h2>
                <p>Your password is {password}</p>
            </div>

            <ToastContainer/>

        </div>
    )
}

export default FormPrompt;
