import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ''

const FormPrompt = () => {

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        localStorage.setItem('name', name);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        setName('');
        setUserName('');
        setPassword('');

        // toast.success('Signup success!', {
        //     position: "top-right",
        //     autoClose: 5000,
        // });

    }


    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (user === localStorage.getItem('username') && pass === localStorage.getItem('password')) {
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

            <div className='formdiv' style={{display:"flex", justifyContent:"space-evenly"}}>
                <form onSubmit={handleSignup}  style={{width:"30%", backgroundColor:"teal", padding: "20px 20px 50px 20px", marginTop:"50px"}}>
                    <h1>Signup</h1>

                    <label htmlFor="name">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

                    <label htmlFor="username">Username:</label>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} required /><br /><br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />

                    <button type="submit">Signup</button>

                </form>

                <form onSubmit={handleLogin}  style={{width:"30%", backgroundColor:"green", padding: "20px 20px 50px 20px", marginTop:"50px"}}>

                    <h1>Login</h1>
                    <label htmlFor="username">Username:</label>
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required /><br /><br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} required /><br /><br />

                    <button type="submit">Login</button>

                </form>
            </div>



            <ToastContainer />

            

        </div>
    )
}

export default FormPrompt;
