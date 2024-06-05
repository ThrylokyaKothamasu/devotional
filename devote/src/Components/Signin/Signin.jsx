/* src/components/SignIn.jsx */
// import React, { useState } from 'react';
import './Styles.css';

const Signin = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const validateUsername = () => {
    //     const regx = /^[a-zA-Z]+$/;
    //     if (!regx.test(username)) {
    //         alert("Please enter a valid name");
    //         return false;
    //     }
    //     if (username.length < 6) {
    //         alert("UserName length should exceed 6 characters");
    //         return false;
    //     }
    //     return true;
    // };

    // const validatePassword = () => {
    //     const regx = /^[a-zA-Z0-9]+$/;
    //     if (!regx.test(password)) {
    //         alert("Please enter a valid password");
    //         return false;
    //     }
    //     if (password.length < 6) {
    //         alert("Password should exceed 6 characters");
    //         return false;
    //     }
    //     return true;
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateUsername() && validatePassword()) {
    //         alert('Form submitted successfully!');
    //     }
    // };

    return (
        <>fgvbh</>
        // <div className="wrapper">
        //     <form onSubmit={handleSubmit}>
        //         <h1>Login</h1>

        //         <div className="input-box">
        //             <input
        //                 type="text"
        //                 placeholder="username"
        //                 name="username"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //                 onBlur={validateUsername}
        //                 id="Uname"
        //             />
        //             <i className='bx bxs-user'></i>
        //         </div>

        //         <div className="input-box">
        //             <input
        //                 type="password"
        //                 placeholder="Password"
        //                 name="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 onBlur={validatePassword}
        //                 id="password"
        //                 required
        //             />
        //             <i className='bx bxs-lock-alt'></i>
        //         </div>

        //         <div className="remember_forget">
        //             <label>
        //                 <input type="checkbox" /> Remember me
        //             </label>
        //             <a href="forget_password.html"> Forget Password</a>
        //         </div>

        //         <button type="submit" className="btn">Login</button>

        //         <div className="register-link">
        //             <p>Don't have an account? <a href="reg.html">Register</a></p>
        //         </div>
        //     </form>
        // </div>
    );
};

export default Signin;
