// import React, { useState } from "react";
// import "@progress/kendo-theme-material/dist/all.css";
// import { Link } from 'react-router-dom'; 
// import { BsCart2 } from "react-icons/bs";
// import {MiOutlineBars3} from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import '../Styles/Navbar.css';

// function Navbar() {

//     const [openMenu, setOpenMenu] = useState(false);
//     const menuOptions = [
//         {
//           text: "Home",
//           icon: <HomeIcon />,
//         },
//         {
//           text: "About",
//           icon: <InfoIcon />,
//         },
//         {
//           text: "Testimonials",
//           icon: <CommentRoundedIcon />,
//         },
//         {
//           text: "Contact",
//           icon: <PhoneRoundedIcon />,
//         },
//         {
//           text: "Cart",
//           icon: <ShoppingCartRoundedIcon />,
//         },
//       ];


//     return (
//         <nav>
//             <div className="nav-logo-container">

//             </div>


//         </nav>
//     )
// }

// export default Navbar;



// import React, { useState } from "react";
// import { BsCart2 } from "react-icons/bs";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import BookstoreLogo from "../Assets/BookHubLogo.png";


// import '../Styles/Navbar.css';

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//     {
//         text: "About",
//         icon: <InfoOutlinedIcon />,
//       },
//     {
//       text: "Books",
//       icon: <LibraryBooksIcon />,
//     },

//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//     },
//     {
//       text: "Cart",
//       icon: <ShoppingCartRoundedIcon />,
//     },

//   ];

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={BookstoreLogo} alt="Bookstore Logo" />
//       </div>
//       <div className="navbar-links-container">
//         <a href="/">Home</a>
//         <a href='/About'>About</a>
//         <a href="/">Books</a>
//         <a href="/">Contact</a>

//         <a href="/">
//           <BsCart2 className="navbar-cart-icon" />
//         </a>
//         <button className="primary-button">LOGIN</button>
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box 
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List  >
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon className="side-icon">{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />

//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { BsCart2 } from "react-icons/bs";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import BookstoreLogo from "../Assets/BookHubLogo.png";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import '../Styles/Navbar.css';

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false); // State to track login status

//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//       link: "/",
//     },
//     {
//       text: "About",
//       icon: <InfoOutlinedIcon />,
//       link: "/About",
//     },
//     {
//       text: "Books",
//       icon: <LibraryBooksIcon />,
//       link: "/",
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//       link: "/",
//     },
//     {
//       text: "Cart",
//       icon: <ShoppingCartRoundedIcon />,
//     },
//     {
//       text: loggedIn ? "Logout" : "Login", // Toggle button text based on login status
//       icon: <BsCart2 className="navbar-cart-icon" />,
//       onClick: () => handleLoginLogout(),
//       link: loggedIn ? "/" : "/Login", // Redirect to /Login if not logged in
//     },
//   ];

//   const handleLoginLogout = () => {
//     // Toggle login status
//     setLoggedIn((prevLoggedIn) => !prevLoggedIn);
//   };

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={BookstoreLogo} alt="Bookstore Logo" />
//       </div>
//       <div className="navbar-links-container">
//         {menuOptions.map((item) => (
  
//           <Link to={item.link} key={item.text}>
//             {item.text === "Login" ? (
//               <button className="primary-button" onClick={item.onClick}>
//                 {item.text}
//               </button>
//             ) : (
//               <div className="navbar-select">
//                 {/* <span className="navbar-cart-icon">{item.icon , item.text}</span> */}
//                 <span className="navbar-cart-text">{item.text}</span>
//               </div>
//             )}
//           </Link>
      
//         ))}


//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton onClick={item.onClick}>
//                   <ListItemIcon className="side-icon">{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;

// // Navbar.js
// import React, { useState, useEffect } from 'react';
// import { BsCart2 } from 'react-icons/bs';
// import { HiOutlineBars3 } from 'react-icons/hi2';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import HomeIcon from '@mui/icons-material/Home';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
// import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import BookstoreLogo from '../Assets/BookHubLogo.png';
// import { useAuth } from '../Contexts/AuthContext';
// import '../Styles/Navbar.css';

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const { user, logout, getUserInfo } = useAuth();
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       const userInfo = await getUserInfo();
//       setLoggedIn(!!userInfo);
//       setUserName(userInfo?.displayName || '');
//     };

//     checkLoggedIn();
//   }, [getUserInfo]);

//   const menuOptions = [
//     {
//       text: 'Home',
//       icon: <HomeIcon />,
//       link: '/',
//     },
//     {
//       text: 'About',
//       icon: <InfoOutlinedIcon />,
//       link: '/About',
//     },
//     {
//       text: 'Books',
//       icon: <LibraryBooksIcon />,
//       link: '/',
//     },
//     {
//       text: loggedIn ? 'Dashboard' : 'Login',
//       icon: <BsCart2 className="navbar-cart-icon" />,
//       onClick: () => handleLoginLogout(),
//       link: loggedIn ? '/Dashboard' : '/Login',
//     },
//   ];

//   const handleLoginLogout = async () => {
//     try {
//       if (loggedIn) {
//         await logout();
//         setLoggedIn(false);
//       } else {
//         // Redirect to /Login when clicking "Login"
//         window.location.href = '/Login';
//       }
//     } catch (error) {
//       console.error('Authentication error:', error);
//     }
//   };

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={BookstoreLogo} alt="Bookstore Logo" />
//       </div>
//       <div className="navbar-links-container">
//         {menuOptions.map((item) => (
//           <Link to={item.link} key={item.text}>
//             {item.text === 'Login' || item.text === 'Dashboard' ? (
//               <button className="primary-button" onClick={item.onClick}>
//                 {item.text}
//                 {item.text === 'Dashboard' && loggedIn && (
//                   <span className="user-info">Welcome, {userName}</span>
//                 )}
//               </button>
//             ) : (
//               <div className="navbar-select">
//                 <span className="navbar-cart-icon">{item.icon}</span>
//                 <span className="navbar-cart-text">{item.text}</span>
//               </div>
//             )}
//           </Link>
//         ))}
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton onClick={item.onClick}>
//                   <ListItemIcon className="side-icon">{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;


// // Navbar.js
// import React, { useState, useEffect } from 'react';
// import { BsCart2 } from 'react-icons/bs';
// import { HiOutlineBars3 } from 'react-icons/hi2';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import HomeIcon from '@mui/icons-material/Home';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
// import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import BookstoreLogo from '../Assets/BookHubLogo.png';
// import { useAuth } from '../Contexts/AuthContext';
// import '../Styles/Navbar.css';

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const { user, logout, getUserInfo } = useAuth();
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       const userInfo = await getUserInfo();
//       setLoggedIn(!!userInfo);
//       setUserName(userInfo?.displayName || '');
//     };

//     checkLoggedIn();
//   }, [getUserInfo]);

//   const menuOptions = loggedIn
//     ? [
//         {
//           text: 'Home',
//           icon: <HomeIcon />,
//           link: '/',
//         },
//         {
//           text: 'About',
//           icon: <InfoOutlinedIcon />,
//           link: '/About',
//         },
//         {
//           text: 'Books',
//           icon: <LibraryBooksIcon />,
//           link: '/',
//         },
//         {
//           text: 'Contact',
//           icon: <PhoneRoundedIcon />,
//           link: '/',
//         },
//         {
//           text: 'Cart',
//           icon: <ShoppingCartRoundedIcon />,
//         },
//         {
//           text: 'Dashboard',
//           icon: <BsCart2 className="navbar-cart-icon" />,
//           onClick: () => handleLoginLogout(),
//           link: `/Dashboard/${user.uid}`, // or user.displayName, etc.

//         },
//       ]
//     : [
//         {
//           text: 'Home',
//           icon: <HomeIcon />,
//           link: '/',
//         },
//         {
//           text: 'About',
//           icon: <InfoOutlinedIcon />,
//           link: '/About',
//         },
//         {
//           text: 'Books',
//           icon: <LibraryBooksIcon />,
//           link: '/',
//         },
//         {
//           text: 'Contact',
//           icon: <PhoneRoundedIcon />,
//           link: '/',
//         },
//         {
//           text: 'Cart',
//           icon: <ShoppingCartRoundedIcon />,
//         },
//         {
//           text: 'Login',
//           icon: <BsCart2 className="navbar-cart-icon" />,
//           onClick: () => handleLoginLogout(),
//           link: '/Login',
//         },
//       ];

//   const handleLoginLogout = async () => {
//     try {
//       if (loggedIn) {
//         await logout();
//         setLoggedIn(false);
//       } else {
//         // Redirect to /Login when clicking "Login"
//         window.location.href = '/Login';
//       }
//     } catch (error) {
//       console.error('Authentication error:', error);
//     }
//   };

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={BookstoreLogo} alt="Bookstore Logo" />
//       </div>
//       <div className="navbar-links-container">
//         {menuOptions.map((item) => (
//           <Link to={item.link} key={item.text}>
//             {item.text === 'Login' || item.text === 'Dashboard' ? (
//               <button className="primary-button" onClick={item.onClick}>
//                 {item.text === 'Dashboard' && loggedIn ? 'Dashboard' : item.text}
//                 {/* {item.text === 'Dashboard' && loggedIn && (
//                   <span className="user-info">Welcome, {userName}</span>
//                 )} */}
//               </button>
//             ) : (
//               <div className="navbar-select">
//                 <span className="navbar-cart-icon">{item.icon}</span>
//                 <span className="navbar-cart-text">{item.text}</span>
//               </div>
//             )}
//           </Link>
//         ))}
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton onClick={item.onClick}>
//                   <ListItemIcon className="side-icon">{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.js

import React, { useState, useEffect } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BookstoreLogo from '../Assets/BookHubLogo.png';
import { useAuth } from '../Contexts/AuthContext';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { user, logout, getUserInfo } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const checkLoggedIn = async () => {
      const userInfo = await getUserInfo();
      setLoggedIn(!!userInfo);
      setUserName(userInfo?.displayName || '');
    };

    checkLoggedIn();
  }, [getUserInfo]);

  const handleLoginLogout = async () => {
    try {
      if (loggedIn) {
        await logout();
        setLoggedIn(false);
      } else {
        // Redirect to /Login when clicking "Login"
        window.location.href = '/Login';
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const menuOptions = loggedIn
    ? [

        {
          text: 'Cart',
          icon: <ShoppingCartRoundedIcon />,
        },
        {
          text: 'Logout', // Changed from 'Dashboard'
          icon: <BsCart2 className="navbar-cart-icon" />,
          onClick: handleLoginLogout,
          link: '/', // Redirects to home after logout
        },
      ]
    : [
        {
          text: 'Home',
          icon: <HomeIcon />,
          link: '/',
        },
        {
          text: 'About',
          icon: <InfoOutlinedIcon />,
          link: '/About',
        },
        {
          text: 'Books',
          icon: <LibraryBooksIcon />,
          link: '/',
        },
        {
          text: 'Contact',
          icon: <PhoneRoundedIcon />,
          link: '/',
        },
   
        {
          text: 'Login',
          icon: <BsCart2 className="navbar-cart-icon" />,
          onClick: handleLoginLogout,
          link: '/Login',
        },
      ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={BookstoreLogo} alt="Bookstore Logo" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <Link to={item.link} key={item.text}>
            {item.text === 'Login' || item.text === 'Logout' ? (
              <button className="primary-button" onClick={item.onClick}>
                {item.text}
              </button>
            ) : (
              <div className="navbar-select">
                <span className="navbar-cart-icon">{item.icon}</span>
                <span className="navbar-cart-text">{item.text}</span>
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon className="side-icon">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
