import React, { useState } from "react";
import { Input } from '@progress/kendo-react-inputs';
import "@progress/kendo-theme-material/dist/all.css";
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import '../Styles/ForgotPasswrd.css';

function ForgotPasswrd() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail()) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        setEmailError('');
        console.log('Email:', email);
        // Add your password reset logic here
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-tint-overlay"></div>
            <form className="forgot-password-form" onSubmit={handleSubmit}>
                <h2 className="forgot-form-title">FORGOT PASSWORD</h2>
                <div className="forgot-form-field">
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="forgot-form-input"
                    />
                    {emailError && <div className="forgot-error-message">{emailError}</div>}
                </div>
                <button type="submit" className="ForgotPasswrd-button">SUBMIT</button>
                <div className="back-to-login-link">
                    {/* Use Link to navigate back to the login page */}
                    <Link className="back-link" to="/">Back to Login</Link>
                </div>
            </form>
        </div>
    );
}

export default ForgotPasswrd;
