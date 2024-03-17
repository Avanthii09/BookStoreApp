// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';
// import { Input } from '@progress/kendo-react-inputs';
// import "@progress/kendo-theme-material/dist/all.css";

// import '../Styles/Login.css';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const isValidEmail = () => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!isValidEmail()) {
//             setEmailError('Please enter a valid email address.');
//             return;
//         }

//         setEmailError('');

//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
//         <div>
//             <div className="login-background-container">
//                 <div className="login-tint-overlay"></div>
//             </div>

//             <div className="login-container">
//                 <GoogleOAuthProvider clientId="849777724166-hruii2dst6m02glm8oa1fo24kud7heit.apps.googleusercontent.com">

//                     <form className="login-form" onSubmit={handleSubmit}>
//                         <h2 className="login-form-title">WELCOME BACK TO BOOKHUB!</h2>
//                         <div className="login-form-field">
//                             <Input
//                                 id="login-username"
//                                 type="email"
//                                 placeholder="Email"
//                                 value={email}
//                                 onChange={handleEmailChange}
//                             />
//                             {emailError && <div className="login-error-message">{emailError}</div>}
//                         </div>
//                         <div className="login-form-field">
//                             <Input
//                                 id="login-password"
//                                 type={showPassword ? 'text' : 'password'}
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                             />
//                             <FontAwesomeIcon
//                                 icon={showPassword ? faEye : faEyeSlash}
//                                 className="login-password-toggle"
//                                 onClick={togglePasswordVisibility}
//                             />
//                         </div>
//                         <div className="login-forgot-password">
//                             <a href="/ForgotPasswrd">Forgot Password?</a>
//                         </div>
//                         <button className="Login-button" type="submit">LOGIN</button>
//                         <div className="login-divider"></div>
//                         <div className="login-button-container">
//                             <GoogleLogin
//                                 onSuccess={credentialResponse => {
//                                     console.log(credentialResponse);
//                                 }}
//                                 onError={() => {
//                                     console.log('Login Failed');
//                                 }}
//                                 className="login-google-login-button"
//                             />
//                         </div>
//                         <div className="login-create-account">
//                             <p>If you're new here, <a href="/SignUp">click here</a> to create an account.</p>
//                         </div>
//                     </form>
//                 </GoogleOAuthProvider>
//             </div>
//         </div>
//     );
// }

// export default Login;

// import React, { useState, useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { AuthContext } from '../Contexts/AuthProvider';
// import { Input } from '@progress/kendo-react-inputs';
// import '@progress/kendo-theme-material/dist/all.css';

// import '../Styles/Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const { login, signUpWithGoogle } = useContext(AuthContext);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const isValidEmail = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isValidEmail()) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     setEmailError('');

//     try {
//       // Call the login function from AuthContext
//       await login(email, password);

//       // Redirect to the home page or any desired route upon successful login
//       // You may use React Router's useHistory for redirection
//       window.location.href = '/';
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle login error (e.g., display error message to the user)
//     }
//   };

//   return (
//     <div>
//       <div className="login-background-container">
//         <div className="login-tint-overlay"></div>
//       </div>

//       <div className="login-container">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h2 className="login-form-title">WELCOME BACK TO BOOKHUB!</h2>
//           <div className="login-form-field">
//             <Input
//               id="login-username"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             {emailError && <div className="login-error-message">{emailError}</div>}
//           </div>
//           <div className="login-form-field">
//             <Input
//               id="login-password"
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <FontAwesomeIcon
//               icon={showPassword ? faEye : faEyeSlash}
//               className="login-password-toggle"
//               onClick={togglePasswordVisibility}
//             />
//           </div>
//           <div className="login-forgot-password">
//             <a href="/ForgotPasswrd">Forgot Password?</a>
//           </div>
//           <button className="Login-button" type="submit">
//             LOGIN
//           </button>
//           <div className="login-divider"></div>
//           <div className="login-button-container">
//             <button
//               className="login-google-login-button"
//               onClick={async () => {
//                 try {
//                   // Call the signUpWithGoogle function from AuthContext
//                   await signUpWithGoogle();

//                   // Redirect to the home page or any desired route upon successful login
//                   // You may use React Router's useHistory for redirection
//                   window.location.href = '/';
//                 } catch (error) {
//                   console.error('Google login failed:', error);
//                   // Handle Google login error (e.g., display error message to the user)
//                 }
//               }}
//             >
//               Login in with Google
//             </button>
//           </div>
//           <div >
//             <p>
//               If you're new here, <a href="/SignUp">click here</a> to create an account.
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState, useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { AuthContext } from '../Contexts/AuthProvider';
// import { Input } from '@progress/kendo-react-inputs';
// import '@progress/kendo-theme-material/dist/all.css';

// import '../Styles/Login.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const { login, signUpWithGoogle } = useContext(AuthContext);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const isValidEmail = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isValidEmail()) {
//       setEmailError('Please enter a valid email address.');
//       return;
//     }

//     setEmailError('');

//     try {
//       // Call the login function from AuthContext
//       await login(email, password);

//       // Redirect to the home page or any desired route upon successful login
//       // You may use React Router's useHistory for redirection
//       window.location.href = '/';
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle login error (e.g., display error message to the user)
//     }
//   };


// import React, { useState, useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { AuthContext } from '../Contexts/AuthProvider';
// import { Input } from '@progress/kendo-react-inputs';
// import '@progress/kendo-theme-material/dist/all.css';

// import '../Styles/Login.css';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const { login, signUpWithGoogle } = useContext(AuthContext);

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const isValidEmail = () => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const handleGoogleLogin = async () => {
//         try {
//             // Call the signUpWithGoogle function from AuthContext
//             await signUpWithGoogle();

//             // Redirect to the home page or any desired route upon successful login
//             // You may use React Router's useHistory for redirection
//             window.location.href = '/';
//         } catch (error) {
//             console.error('Google login failed:', error);
//             // Handle Google login error (e.g., display error message to the user)
//         }
//     };

//     const handleRegularLogin = async () => {
//         try {
//             // Call the login function from AuthContext
//             await login(email, password);

//             // Redirect to the home page or any desired route upon successful login
//             // You may use React Router's useHistory for redirection
//             window.location.href = '/';
//         } catch (error) {
//             console.error('Login failed:', error);
//             // Handle login error (e.g., display error message to the user)
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!isValidEmail()) {
//             setEmailError('Please enter a valid email address.');
//             return;
//         }

//         setEmailError('');

//         // Check if the user clicked the Google login button
//         if (e.nativeEvent.submitter.id === 'LogincustomBtn') {
//             handleGoogleLogin();
//         } else {
//             handleRegularLogin();
//         }
//     };

//     return (
//         <div>
//             <div className="login-background-container">
//                 <div className="login-tint-overlay"></div>
//             </div>

//             <div className="login-container">
//                 <form className="login-form" onSubmit={handleSubmit}>
//                     <h2 className="login-form-title">WELCOME BACK TO BOOKHUB!</h2>
//                     <div className="login-form-field">
//                         <Input
//                             id="login-username"
//                             type="email"
//                             placeholder="Email"
//                             value={email}
//                             onChange={handleEmailChange}
//                         />
//                         {emailError && <div className="login-error-message">{emailError}</div>}
//                     </div>
//                     <div className="login-form-field">
//                         <Input
//                             id="login-password"
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={handlePasswordChange}
//                         />
//                         <FontAwesomeIcon
//                             icon={showPassword ? faEye : faEyeSlash}
//                             className="login-password-toggle"
//                             onClick={togglePasswordVisibility}
//                         />
//                     </div>
//                     <div className="login-forgot-password">
//                         <a href="/ForgotPasswrd">Forgot Password?</a>
//                     </div>
//                     <button className="Login-button" type="submit" onClick={handleSubmit}>
//                         LOGIN
//                     </button>

//                     <div className="login-divider"></div>
//                     <div className="login-button-container">
//                         <div
//                             id="LogincustomBtn"
//                             className="customGPlusSignIn"
//                             onClick={async () => {
//                                 try {
//                                     // Call the signUpWithGoogle function from AuthContext
//                                     await signUpWithGoogle();

//                                     // Redirect to the home page or any desired route upon successful login
//                                     // You may use React Router's useHistory for redirection
//                                     window.location.href = '/';
//                                 } catch (error) {
//                                     console.error('Google login failed:', error);
//                                     // Handle Google login error (e.g., display error message to the user)
//                                 }
//                             }}
//                         >
//                             <span className="icon"></span>
//                             <span className="buttonText"> Login with Google</span>
//                         </div>
//                     </div>
//                     <div className="login-create-account">
//                         <p>
//                             If you're new here, <a href="/SignUp">click here</a> to create an account.
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;



import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../Contexts/AuthProvider';
import { Input } from '@progress/kendo-react-inputs';
import '@progress/kendo-theme-material/dist/all.css';

import '../Styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { login, signUpWithGoogle } = useContext(AuthContext);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isValidEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleGoogleLogin = async (e) => {
        e.preventDefault();
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
    };

    const handleRegularLogin = async () => {
        try {
            // Call the login function from AuthContext
            await login(email, password);

            // Redirect to the home page or any desired route upon successful login
            // You may use React Router's useHistory for redirection
            window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error (e.g., display error message to the user)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail()) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        setEmailError('');

        // Check if the user clicked the Google login button
        if (e.nativeEvent.submitter.id === 'LogincustomBtn') {
            handleGoogleLogin(e);
        } else {
            handleRegularLogin();
        }
    };

    return (
        <div>
            <div className="login-background-container">
                <div className="login-tint-overlay"></div>
            </div>

            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-form-title">WELCOME BACK TO BOOKHUB!</h2>
                    <div className="login-form-field">
                        <Input
                            id="login-username"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <div className="login-error-message">{emailError}</div>}
                    </div>
                    <div className="login-form-field">
                        <Input
                            id="login-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEye : faEyeSlash}
                            className="login-password-toggle"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <div className="login-forgot-password">
                        <a href="/ForgotPasswrd">Forgot Password?</a>
                    </div>
                    <button className="Login-button" type="submit">
                        LOGIN
                    </button>

                    <div className="login-divider"></div>
                    <div className="login-button-container">
                        <div
                            id="LogincustomBtn"
                            className="customGPlusSignIn"
                            onClick={handleGoogleLogin}
                        >
                            <span className="icon"></span>
                            <span className="buttonText"> Login with Google</span>
                        </div>
                    </div>
                    <div className="login-create-account">
                        <p>
                            If you're new here, <a href="/SignUp">click here</a> to create an account.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
