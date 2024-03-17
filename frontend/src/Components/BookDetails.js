// // BookDetail.js
// import React, { useContext } from 'react';
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import { Link } from 'react-router-dom';

// const BookDetail = ({ book, addToCart }) => {
//   const handleAddToCart = () => {
//     addToCart(book);
//   };

//   return (
//     <div className='book-detail'>
//       <h2>{book.bookTitle}</h2>
//       <p>{book.authorName}</p>
//       <img src={book.imageURL} alt={book.bookTitle} />

//       <div className='actions'>
//         <button onClick={handleAddToCart}>
//           <ShoppingCartRoundedIcon />
//           Add to Cart
//         </button>
//       </div>

//       <div className='description'>
//         <p>{book.bookDescription}</p>
//       </div>

//       <div className='back-to-books'>
//         <Link to='/books'>Back to Books</Link>
//       </div>
//     </div>
//   );
// };

// export default BookDetail;

// import React, { useEffect, useState } from 'react';
// import { Spinner } from 'flowbite-react';
// import Navbar from './Navbar';

// const BookDetails = ({ match }) => {
//   const bookId = match.params.id;
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetching book details
//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${bookId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching book details:', error);
//         setLoading(false);
//       });
//   }, [bookId]);

//   if (loading) {
//     return (
//       <div className="text-center mt-28">
//         <Spinner aria-label="Center-aligned spinner example" />
//       </div>
//     );
//   }

//   if (!book) {
//     return <div>Book not found</div>;
//   }

//   const { bookTitle, authorName, imageURL, bookDescription, bookPDFURL } = book;

//   return (
//     <div>
//       <Navbar />

//       <div className="book-details-container">
//         <img src={imageURL} alt={bookTitle} className="w-full" />

//         <div className="mt-5 text-left space-y-2">
//           <h2 className="text-2xl font-bold">{bookTitle}</h2>
//           <p className="text-lg">{authorName}</p>
//           <p className="text-gray-700">{bookDescription}</p>
//           {/* You can add more details here */}
//         </div>

//         <div className="mt-8">
//           <a href={bookPDFURL} target="_blank" rel="noopener noreferrer" className="text-blue-700">
//             View PDF
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;

// import React, { useEffect, useState } from 'react';
// import { Spinner } from 'flowbite-react';
// import Navbar from './Navbar';
// import { useNavigate, useParams } from 'react-router-dom';
// import '../Styles/BookDetails.css'; // Import your BookDetails.css file

// const BookDetails = () => {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     // Fetch book details using the bookId
//     fetch(`http://localhost:5000/book/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching book details:', error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="text-center mt-28">
//         <Spinner aria-label="Center-aligned spinner example" />
//       </div>
//     );
//   }

//   // Render your book details UI here using the 'book' state

//   return (
//     <div>
//       <Navbar />

//       <div className='book-details-container'>
//         <h2 className='book-details-title'>{book.bookTitle}</h2>
//         {/* Rest of your book details UI */}
//       </div>
//     </div>
//   );
// };

// export default BookDetails;



// import React, { useEffect, useState } from 'react';
// import { Spinner } from 'flowbite-react';
// import Navbar from './Navbar';
// import { useParams } from 'react-router-dom';
// import '../Styles/BookDetails.css'; // Import your BookDetails.css file

// const BookDetails = () => {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     // Fetch book details using the bookId
//     fetch(`http://localhost:5000/book/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching book details:', error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="text-center mt-28">
//         <Spinner aria-label="Center-aligned spinner example" />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navbar />

//       <div className='book-details-container'>
//         <h2 className='book-details-title'>{book.bookTitle}</h2>
//         <p className='author'>{book.authorName}</p>
//         <img src={book.imageURL} alt={book.bookTitle} className='book-image' />
//         <p className='description'>{book.bookDescription}</p>
//         {book.bookPDFURL && (
//           <a href={book.bookPDFURL} target='_blank' rel='noopener noreferrer'>
//             Read Book
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookDetails;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import bgimage from '../Assets/bookdetailsbg.jpg';
// import '../Styles/BookDetails.css';

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching book details:', error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!book) {
//     return <p>Book not found.</p>;
//   }

//   const { booktitle, authorName, imageUrl, description, cost } = book;

//   return (
//     <div>
//             <Navbar />
   
//     <div className="book-details-container">
//       <div className="book-image-container">
//         <img src={imageUrl} alt={booktitle} className="book-image" />
//       </div>
//       <div className="book-info-container">
//         <h1 className="book-title">{booktitle}</h1>
//         <p className="bookdetails-author">{authorName}</p>
//         <p className="bookdetails-description">{description}</p>
//         <p className="bookdetails-cost">${cost}</p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default BookDetails;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import bookDetailsBg from '../Assets/bookdetailsbg1.jpg';
// import '../Styles/BookDetails.css';

// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching book details:', error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!book) {
//     return <p>Book not found.</p>;
//   }

//   const { booktitle, authorName, imageUrl, description, cost } = book;

//   const bookDetailsStyle = {
//     backgroundImage: `url(${bookDetailsBg})`,
//     backgroundSize: 'cover',
//   };

//   return (
//     <div  className= "bkdetbody" style={bookDetailsStyle}>
//               <Navbar />
//       <div className="book-details-container">

//         <div className="book-image-container">
//           <img src={imageUrl} alt={booktitle} className="book-image" />
//         </div>
//         <div className="book-info-container">
//           <h1 className="book-title">{booktitle}</h1>
//           <p className="bookdetails-author">{authorName}</p>
//           <p className="bookdetails-description">{description}</p>
//           <p className="bookdetails-cost">${cost}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import bookDetailsBg from '../Assets/bookdetailsbg1.jpg';

// import '@progress/kendo-theme-default/dist/all.css';
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   CardImage,
//   CardSubtitle,
//   CardActions,
//   Avatar,
// } from '@progress/kendo-react-layout';
// import { SvgIcon } from '@progress/kendo-react-common';
// import {
//   commentIcon,
//   heartOutlineIcon,
//   cartIcon,
// } from '@progress/kendo-svg-icons';
// import '../Styles/BookDetails.css';


// const bookDetailsStyle = {
//         backgroundImage: `url(${bookDetailsBg})`,
//         backgroundSize: 'cover',
//       };
    
// const BookDetails = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:5000/book/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setBook(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching book details:', error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!book) {
//     return <p>Book not found.</p>;
//   }

//   const { booktitle, authorName, imageUrl, description, cost } = book;

//   return (
//     <div className='bkdetbody' style={bookDetailsStyle}>
//       <Navbar />
//       <div className="book-details-container">
//         <Card style={{ width: '400px' }}>
//           <CardImage src={imageUrl} alt={booktitle} />
//           <CardBody>
//             <CardHeader>
//               <CardTitle>{booktitle}</CardTitle>
//               <CardSubtitle>{authorName}</CardSubtitle>
//             </CardHeader>
//             <p className="bookdetails-description">{description}</p>
//           </CardBody>
//           <CardActions>
//             <SvgIcon icon={heartOutlineIcon} />
//             <SvgIcon icon={commentIcon} />
//             <SvgIcon icon={cartIcon} />
//           </CardActions>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;

// // BookDetails.js

// BookDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import bookDetailsBg from '../Assets/bookdetailsbg1.jpg';
import '@progress/kendo-theme-default/dist/all.css';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardActions,
} from '@progress/kendo-react-layout';
import { SvgIcon } from '@progress/kendo-react-common';
import { commentIcon, heartOutlineIcon, cartIcon } from '@progress/kendo-svg-icons';
import '../Styles/BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching book details:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found.</p>;
  }

  const { booktitle, authorName, imageUrl, description, cost } = book;

  return (
    <div className="bkdetbody" style={{ backgroundImage: `url(${bookDetailsBg})`, backgroundSize: 'cover' }}>
      <Navbar />
      <div className="book-details-container">
        <div className="book-image-container">
          <img src={imageUrl} alt={booktitle} className="book-image" />
        </div>
        <Card  className="bookdetailscard" style={{ width: '400px' }}>
          <CardHeader>
            <CardTitle className='book-title'>{booktitle}</CardTitle>
            <CardSubtitle className='bookdetails-author'>{authorName}</CardSubtitle>
          </CardHeader>
          <CardBody>
            <p className="bookdetails-description">{description}</p>
          </CardBody>
          <CardActions>
            <SvgIcon classname="bkdeticons" icon={heartOutlineIcon} style={{ color: '#2d1b06', width: '24px', height: '24px' }}/>
            <SvgIcon classname="bkdeticons" icon={commentIcon} style={{ color: '#2d1b06', width: '24px', height: '24px' }} />
            <SvgIcon classname="bkdeticons" icon={cartIcon} style={{ color: '#2d1b06', width: '24px', height: '24px' }} />
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default BookDetails;
