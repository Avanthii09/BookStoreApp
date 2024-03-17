// // import React from "react";
// // import BannerBackground from "../Assets/sample.jpg"; // Update the import statement
// // import BannerImage from "../Assets/bg2.jpg"; // Update the import statement
// // import Navbar from "./Navbar";
// // import { FiArrowRight } from "react-icons/fi";
// // import '../Styles/Home.css';


// // const Home = () => {
// //   return (
// //     <div className="home-container">
// //       <Navbar />
// //       <div className="home-banner-container">
// //         <div className="home-bannerImage-container">
// //           <img src={BannerBackground} alt="Banner Background" />
// //         </div>
// //         <div className="home-text-section">
// //           <h1 className="primary-heading">
// //             Welcome to TheBookHub.com - Your Ultimate Bookstore
// //           </h1>
// //           <p className="primary-text">
// //             Explore a vast collection of books and immerse yourself in the world of literature.
// //           </p>
// //           <button className="secondary-button">
// //             Discover Books <FiArrowRight />
// //           </button>
// //         </div>
// //         <div className="home-image-section">
// //           <img src={BannerImage} alt="Banner Image" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// export default Home;

// import React from "react";
// import BannerBackground from "../Assets/bckgrnd.jpg"; // Update the import statement
// import BannerImage from "../Assets/bggg.jpg"; // Update the import statement
// import Navbar from "./Navbar";
// import About from "./About";
// import { FiArrowRight } from "react-icons/fi";
// import '../Styles/Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <Navbar />
//       <div className="home-banner-container">
//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             Welcome to The BookHub  - Your Ultimate Bookstore
//           </h1>
//           <p className="primary-text">
//             Explore a vast collection of books and immerse yourself in the world of literature.
//           </p>
//           <button className="secondary-button">
//             Discover Books <FiArrowRight />
//           </button>
//         </div>
//         <div className="home-image-section">
//           <img src={BannerImage} alt="Banner Image" />
//         </div>
//       </div>
//       <div className="half-background-image">
//         <img src={BannerBackground} alt="Banner Background" />
//       </div>
//       <About/>
//     </div>
//   );
// };

// export default Home;

import React, { useContext } from "react";

import { Link, useNavigate } from 'react-router-dom';
import BannerBackground from "../Assets/bckgrnd.jpg";
import BannerImage from "../Assets/bggg.jpg";
import Navbar from "./Navbar";
import About from "./About";
import { FiArrowRight } from "react-icons/fi";
import { AuthContext } from "../Contexts/AuthProvider";
import '../Styles/Home.css';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleDiscoverBooks = () => {
    // Use the navigate function to navigate to the "/Login" route
    navigate('/Login');
  };
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          {currentUser ? (
            <>
              <h1 className="primary-heading">
                Hi, {currentUser.displayName} - Welcome to The BookHub!
              </h1>
              <p className="primary-text">
                Explore a vast collection of books and immerse yourself in the world of literature.
              </p>
            </>
          ) : (
            <>
              <h1 className="primary-heading">
                Welcome to The BookHub - Your Ultimate Bookstore
              </h1>
              <p className="primary-text">
                Explore a vast collection of books and immerse yourself in the world of literature.
              </p>
              <button className="secondary-button" onClick={handleDiscoverBooks}>
                Discover Books <FiArrowRight />
              </button>
            </>
          )}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner Image" />
        </div>
      </div>
      <div className="half-background-image">
        <img src={BannerBackground} alt="Banner Background" />
      </div>
      <About />
    </div>
  );
};

export default Home;
