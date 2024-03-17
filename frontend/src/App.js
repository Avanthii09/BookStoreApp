// import * as React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
// import Login from './Components/Login';
// import ForgotPasswrd from './Components/ForgotPasswrd';
// import SignUp from './Components/SignUp';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Books from './Components/Books';
// import BookDetail from './Components/BookDetails';

// function App() {
//   return (
//     <div className="App">

//       {/* <Login/> */}
//       <BrowserRouter>

//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/ForgotPasswrd' element={<ForgotPasswrd />} />
//           <Route path='/SignUp' element={<SignUp />} />
//           <Route path='/Login' element={<Login />} />
//           <Route path='About' element={<About />} />
//           <Route path='/Contact' element={<Contact />} />
//           <Route path='/books' element={<Books />} />
//           <Route path='/book/:id' element={<BookDetail />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext'; // Import AuthProvider
import './App.css';
import Login from './Components/Login';
import ForgotPasswrd from './Components/ForgotPasswrd';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Books from './Components/Books';
import BookDetail from './Components/BookDetails';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider> {/* Wrap your entire application with AuthProvider */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ForgotPasswrd" element={<ForgotPasswrd />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetail />} />
            {/* <Route path="/Dashboard/:user" element={<Dashboard />} /> */}
            <Route path="/Dashboard/:userId" element={<Dashboard />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
