import React, { useState } from 'react';
import './Styles.css'; // Import the CSS file

const RegistrationForm = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    // const validateUsername = () => {
    //     const regx = /^[a-zA-Z]+$/;
    //     if (!regx.test(username)) {
    //         alert("Please enter a valid name");
    //     }
    // };

    // const validatePassword = () => {
    //     const regx = /^[a-zA-Z]+$/;
    //     if (!regx.test(password) && password.length < 6) {
    //         alert("Please enter a valid password and length should exceed 6 characters");
    //         return false;
    //     }
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

    // const validateConfirmPassword = () => {
    //     if (password !== confirmPassword) {
    //         alert("Please enter the same Password and Confirm Password");
    //     }
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validateUsername() && validatePassword() && validateConfirmPassword()) {
    //         // Proceed with form submission or further processing
    //         alert('Form submitted successfully!');
    //     }
    // };

    return (
        <div className="wrapper">
            {/* <form onSubmit={handleSubmit}>
                <h1>Registration</h1>

                <div className="input-box">
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={validateUsername}
                        id="Uname"
                    />
                    <i className='bx bxs-user'></i>
                </div>

                <div className="input-box">
                    <input
                        type="Password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={validatePassword}
                        id="password"
                    />
                    <i className='bx bx-lock-open-alt'></i>
                </div>

                <div className="input-box">
                    <input
                        type="Password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={validateConfirmPassword}
                        id="Confirm_Password"
                    />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <button type="submit" className="btn">Register</button>
            </form> */}
        </div>
    );
};

export default RegistrationForm;
