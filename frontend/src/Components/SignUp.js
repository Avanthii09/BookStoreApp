
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { Input } from '@progress/kendo-react-inputs';
// import "@progress/kendo-theme-material/dist/all.css";

// import '../Styles/SignUp.css';

// function SignUp() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [phone, setPhone] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
//     const [phoneError, setPhoneError] = useState('');

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         const userEmail = e.target.value;
//         setEmail(userEmail);

//         // Validate email
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(userEmail)) {
//             setEmailError('Please enter a valid email address.');
//         } else {
//             setEmailError('');
//         }
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         // Reset password error when user types
//         setPasswordError('');
//     };

//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value);
//     };

//     const handlePhoneChange = (e) => {
//         const phoneNumber = e.target.value;
//         setPhone(phoneNumber);

//         // Validate phone number
//         const phoneRegex = /^[0-9]{10}$/;
//         if (!phoneRegex.test(phoneNumber)) {
//             setPhoneError('Please enter a valid 10-digit phone number.');
//         } else {
//             setPhoneError('');
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleConfirmPasswordVisibility = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//     };

//     const handleConfirmPasswordFocus = () => {
//         setConfirmPasswordFocused(true);
//     };

//     const handleConfirmPasswordBlur = () => {
//         setConfirmPasswordFocused(false);
//     };

//     const isValidPassword = () => {
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
//         return passwordRegex.test(password);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Check if email is valid
//         if (emailError) {
//             // Display an error message or handle it as needed
//             return;
//         }

//         // Check if password is valid
//         if (!isValidPassword()) {
//             setPasswordError('Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special symbol.');
//             return;
//         }

//         // Check if password and confirm password match
//         if (password !== confirmPassword) {
//             setPasswordError('Passwords do not match.');
//             return;
//         }

//         // Check if phone number is valid
//         if (phoneError) {
//             // Display an error message or handle it as needed
//             return;
//         }

//         // Additional validation logic can be added as needed

//         // Reset errors when form is submitted
//         setEmailError('');
//         setPasswordError('');
//         setPhoneError('');

//         // Your form submission logic here
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Password:', password);
//         console.log('Confirm Password:', confirmPassword);
//         console.log('Phone:', phone);
//     };

//     return (
//         <div>
//             <div className="signup-background-container">
//                 <div className="signup-tint-overlay"></div>
//             </div>

//             <div className="signup-container">
//                 <form className="signup-form" onSubmit={handleSubmit}>
//                     <h2 className="signup-form-title">CREATE AN ACCOUNT</h2>
//                     <div className="signup-form-field">
//                         <Input
//                             id="signup-name"
//                             type="text"
//                             placeholder="Name"
//                             value={name}
//                             onChange={handleNameChange}
//                         />
//                     </div>
//                     <div className="signup-form-field">
//                         <Input
//                             id="signup-email"
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={handleEmailChange}
//                         />
//                         {emailError && <div className="signup-error-message">{emailError}</div>}
//                     </div>
//                     <div className="signup-form-field">
//                         <Input
//                             id="signup-password"
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                         />
//                         <FontAwesomeIcon
//                             icon={showPassword ? faEye : faEyeSlash}
//                             className="signup-password-toggle"
//                             onClick={togglePasswordVisibility}
//                         />
//                         {passwordError && <div className="signup-error-message">{passwordError}</div>}
//                     </div>
//                     <div className="signup-form-field">
//                         <Input
//                             id="signup-confirm-password"
//                             type={showConfirmPassword ? 'text' : 'password'}
//                             placeholder="Confirm Password"
//                             value={confirmPassword}
//                             onChange={handleConfirmPasswordChange}
//                             onFocus={handleConfirmPasswordFocus}
//                             onBlur={handleConfirmPasswordBlur}
//                         />
//                         <FontAwesomeIcon
//                             icon={showConfirmPassword ? faEye : faEyeSlash}
//                             className="signup-password-toggle"
//                             onClick={toggleConfirmPasswordVisibility}
//                         />
//                         {confirmPasswordFocused && confirmPassword !== password && (
//                             <div className="signup-error-message">Passwords do not match.</div>
//                         )}
//                     </div>
//                     <div className="signup-form-field signup-phone-field">

//                             <Input
//                                 id="signup-phone"
//                                 type="tel"
//                                 placeholder="Phone Number"
//                                 value={phone}
//                                 onChange={handlePhoneChange}
//                             />
//                             {phoneError && <div className="signup-error-message">{phoneError}</div>}

//                     </div>
//                     <button className="signup-button" type="submit">CREATE ACCOUNT</button>
//                     <div className="signup-divider"></div>
//                     <div className="signup-login-link">
//                         <p>Already have an account? <a href="/Login">Login here</a>.</p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignUp;

// import React, { useState, useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { Input } from '@progress/kendo-react-inputs';
// import { AuthContext } from '../Contexts/AuthProvider';

// import '../Styles/SignUp.css';

// function SignUp() {
//     const { createUser } = useContext(AuthContext);

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [phone, setPhone] = useState('');

//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
//     const [phoneError, setPhoneError] = useState('');

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         const userEmail = e.target.value;
//         setEmail(userEmail);

//         // Validate email
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(userEmail)) {
//             setEmailError('Please enter a valid email address.');
//         } else {
//             setEmailError('');
//         }
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         // Reset password error when user types
//         setPasswordError('');
//     };

//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value);
//     };

//     const handlePhoneChange = (e) => {
//         const phoneNumber = e.target.value;
//         setPhone(phoneNumber);

//         // Validate phone number
//         const phoneRegex = /^[0-9]{10}$/;
//         if (!phoneRegex.test(phoneNumber)) {
//             setPhoneError('Please enter a valid 10-digit phone number.');
//         } else {
//             setPhoneError('');
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const toggleConfirmPasswordVisibility = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//     };

//     const handleConfirmPasswordFocus = () => {
//         setConfirmPasswordFocused(true);
//     };

//     const handleConfirmPasswordBlur = () => {
//         setConfirmPasswordFocused(false);
//     };

//     const isValidPassword = () => {
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
//         return passwordRegex.test(password);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Check if email is valid
//         if (emailError) {
//             // Display an error message or handle it as needed
//             return;
//         }

//         // Check if password is valid
//         if (!isValidPassword()) {
//             setPasswordError(
//                 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special symbol.'
//             );
//             return;
//         }

//         // Check if password and confirm password match
//         if (password !== confirmPassword) {
//             setPasswordError('Passwords do not match.');
//             return;
//         }

//         // Check if phone number is valid
//         if (phoneError) {
//             // Display an error message or handle it as needed
//             return;
//         }

//         try {
//             // Call the createUser function from AuthContext
//             await createUser(email, password);

//             // Your form submission logic here
//             console.log('Name:', name);
//             console.log('Email:', email);
//             console.log('Phone:', phone);
//         } catch (error) {
//             console.error('Account creation failed:', error);
//             // Handle account creation error (e.g., display error message to the user)
//         }
//     };

//     return (
//         <div>
//             <div className="signup-background-container">
//                 <div className="signup-tint-overlay"></div>
//             </div>

//             <div className="signup-container">
//                 <form className="signup-form" onSubmit={handleSubmit}>
//                     <h2 className="signup-form-title">CREATE AN ACCOUNT</h2>
//                     <div className="signup-form-field">
//                         <Input
//                             id="signup-name"
//                             type="text"
//                             placeholder="Name"
//                             value={name}
//                             onChange={handleNameChange}
//                         />
//                     </div>
//                     <div className="signup-form-field">
//                         <Input
//                             id="signup-email"
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={handleEmailChange}
//                         />
//                         {emailError && <div className="signup-error-message">{emailError}</div>}
//                     </div>
//                     <div className="signup-form-field">
//                         <Input
//                             id="signup-password"
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                         />
//                         <FontAwesomeIcon
//                             icon={showPassword ? faEye : faEyeSlash}
//                             className="signup-password-toggle"
//                             onClick={togglePasswordVisibility}
//                         />
//                         {passwordError && <div className="signup-error-message">{passwordError}</div>}
//                     </div>
//                     <div className="signup-form-field">
//                         <Input
//                             id="signup-confirm-password"
//                             type={showConfirmPassword ? 'text' : 'password'}
//                             placeholder="Confirm Password"
//                             value={confirmPassword}
//                             onChange={handleConfirmPasswordChange}
//                             onFocus={handleConfirmPasswordFocus}
//                             onBlur={handleConfirmPasswordBlur}
//                         />
//                         <FontAwesomeIcon
//                             icon={showConfirmPassword ? faEye : faEyeSlash}
//                             className="signup-password-toggle"
//                             onClick={toggleConfirmPasswordVisibility}
//                         />
//                         {confirmPasswordFocused && confirmPassword !== password && (
//                             <div className="signup-error-message">Passwords do not match.</div>
//                         )}
//                     </div>
//                     <div className="signup-form-field signup-phone-field">
//                         <Input
//                             id="signup-phone"
//                             type="tel"
//                             placeholder="Phone Number"
//                             value={phone}
//                             onChange={handlePhoneChange}
//                         />
//                         {phoneError && <div className="signup-error-message">{phoneError}</div>}
//                     </div>
//                     <button className="signup-button" type="submit">
//                         CREATE ACCOUNT
//                     </button>
//                     <div className="signup-divider"></div>
//                     <div className="signup-login-link">
//                         <p>
//                             Already have an account? <a href="/Login">Login here</a>.
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default SignUp;



import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@progress/kendo-react-inputs';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../Contexts/AuthProvider';
import '@progress/kendo-theme-material/dist/all.css';

import '../Styles/SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const { createUser, signUpWithGoogle } = useContext(AuthContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [signupError, setSignupError] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        const userEmail = e.target.value;
        setEmail(userEmail);

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // Reset password error when user types
        setPasswordError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handlePhoneChange = (e) => {
        const phoneNumber = e.target.value;
        setPhone(phoneNumber);

        // Validate phone number
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
            setPhoneError('Please enter a valid 10-digit phone number.');
        } else {
            setPhoneError('');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleConfirmPasswordFocus = () => {
        setConfirmPasswordFocused(true);
    };

    const handleConfirmPasswordBlur = () => {
        setConfirmPasswordFocused(false);
    };

    const isValidPassword = () => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if email is valid
        if (emailError) {
            // Display an error message or handle it as needed
            return;
        }

        // Check if password is valid
        if (!isValidPassword()) {
            setPasswordError(
                'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special symbol.'
            );
            return;
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }

        // Check if phone number is valid
        if (phoneError) {
            // Display an error message or handle it as needed
            return;
        }

        try {
            // Call the createUser function from AuthContext
            await createUser(email, password);

            // Your form submission logic here
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            navigate('/');
        } catch (error) {
            console.error('Account creation failed:', error);
            if (error.code === 'auth/email-already-in-use') {
                setSignupError('Email is already in use. Please use a different email.');
            } else {
                setSignupError('Account creation failed. Please try again.');
            }

            // Handle account creation error (e.g., display error message to the user)
        }
    };

    return (
        <div>
            <div className="signup-background-container">
                <div className="signup-tint-overlay"></div>
            </div>

            <div className="signup-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2 className="signup-form-title">CREATE AN ACCOUNT</h2>
                    <div className="signup-form-field">
                        <Input
                            id="signup-name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="signup-form-field">
                        <Input
                            id="signup-email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <div className="signup-error-message">{emailError}</div>}
                    </div>
                    <div className="signup-form-field">
                        <Input
                            id="signup-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            className="signup-password-toggle"
                            onClick={togglePasswordVisibility}
                        />
                        {passwordError && <div className="signup-error-message">{passwordError}</div>}
                    </div>
                    <div className="signup-form-field">
                        <Input
                            id="signup-confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            onFocus={handleConfirmPasswordFocus}
                            onBlur={handleConfirmPasswordBlur}
                        />
                        <FontAwesomeIcon
                            icon={showConfirmPassword ? faEye : faEyeSlash}
                            className="signup-password-toggle"
                            onClick={toggleConfirmPasswordVisibility}
                        />
                        {confirmPasswordFocused && confirmPassword !== password && (
                            <div className="signup-error-message">Passwords do not match.</div>
                        )}
                    </div>
                    <div className="signup-form-field signup-phone-field">
                        <Input
                            id="signup-phone"
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                        {phoneError && <div className="signup-error-message">{phoneError}</div>}
                    </div>
                    <button className="signup-button" type="submit" onClick={handleSubmit}>
                        CREATE ACCOUNT
                    </button>
                    <div className="signup-divider"></div>
                    <div className="signup-form-field signup-google-button-container">
                        <div
                            id="customBtn"
                            className="customGPlusSignIn"
                            onClick={async () => {
                                try {
                                    // Call the signUpWithGoogle function from AuthContext
                                    await signUpWithGoogle();

                                    // Redirect to the home page or any desired route upon successful login
                                    // You may use React Router's useHistory for redirection
                                    window.location.href = '/';
                                } catch (error) {
                                    console.error('Google login failed:', error);
                                    // Handle Google login error (e.g., display error message to the user)
                                }
                            }}
                        >
                            <span className="icon"></span>
                            <span className="buttonText"> Sign Up with Google</span>
                        </div>
                    </div>
                    <div className="signup-login-link">
                        <p>
                            Already have an account? <a href="/Login">Login here</a>.
                        </p>
                    </div>
                    <div className='acct-creation-error'>
                    {signupError && <div className="signup-error-message">{signupError}</div>}

                </div>
                </form>
                

            </div>

        </div>
    );
}

export default SignUp;
