// import React from 'react';
// import AboutBackground from '../Assets/bckground2.jpg';
// import AboutBackgroundImage from '../Assets/bg1.jpg';
// import { BsFillPlayCircleFill } from 'react-icons/bs';
// import '../Styles/About.css'

// const About = () => {
//   return (
//     <div className="about-section-container">
//       <div className="about-background-image-container">
//         <img className='imggg' src={AboutBackground} alt="About Background" />
//       </div>
//       <div className="about-section-image-container">
//         <img className='imgg' src={AboutBackgroundImage} alt="About Image" />
//       </div>
//       <div className="about-section-text-container">
//         <p className="primary-subheading">About Us</p>
//         <h1 className="primary-heading">
//           Discover the World of Books at The BookHub
//         </h1>
//         <p className="primary-text">
//           At The BookHub, we believe in the power of books to inspire, educate,
//           and entertain. Our bookstore is a haven for book lovers, offering a
//           curated collection of literary wonders spanning various genres.
//         </p>
//         <p className="primary-text">
//           Immerse yourself in the magic of storytelling and explore the vast
//           realms of fiction, non-fiction, and everything in between. We are
//           passionate about connecting readers with the perfect book, fostering
//           a love for reading that lasts a lifetime.
//         </p>
//         <div className="about-buttons-container">
//           <button className="secondary-button">Learn More</button>
//           <button className="watch-video-button">
//             <BsFillPlayCircleFill /> Watch Video
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import AboutBackground from '../Assets/bckground2.jpg';
import AboutBackgroundImage from '../Assets/bg1.jpg';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import Navbar from './Navbar';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-section-container">
        <Navbar/>
      <div className="about-background-image-container">
        <img className="imggg" src={AboutBackground} alt="About Background" />
      </div>
      <div className="about-section-image-container">
        <img className="imgg" src={AboutBackgroundImage} alt="About Image" />
      </div>
      <div className="about-section-text-container">
        <h1 className="about-primary-heading">
    
          About us
        </h1>
        <p className="about-primary-text">
         Discover the World of Books at The BookHub 
        <br/>
          At The BookHub, we believe in the power of books to inspire, educate, 
          and entertain. Our bookstore is a haven for book lovers, offering a
          curated collection of literary wonders spanning various genres.
        </p>
        <p className="about-primary-text">
          Immerse yourself in the magic of storytelling and explore the vast
          realms of fiction, non-fiction, and everything in between. We are
          passionate about connecting readers with the perfect book, fostering
          a love for reading that lasts a lifetime.
        </p>
        <div className="about-buttons-container">
          <button className="about-secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
