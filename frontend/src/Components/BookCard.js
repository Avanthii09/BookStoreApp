// // // BookCard.js
// // import React from 'react';
// // import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

// // import { Link } from 'react-router-dom';
// // import '../Styles/BookCard.css';

// // const BookCard = ({ book }) => {
// //   const addToCart = () => {
// //     // Implement cart functionality
// //     console.log(`Added ${book.bookTitle} to cart`);
// //   };

// //   return (
// //     <div className='book-card'>
// //       <Link to={`/book/${book._id}`} className='cursor-pointer'>
// //         <div className='bg-gray-100 p-8 rounded-lg relative'>
// //           <img src={book.imageURL} alt={book.bookTitle} className='w-full' />
// //           <div className='absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded'>
// //             <FaCartShopping className='w-4 h-4 text-white' onClick={addToCart} />
// //           </div>
// //         </div>

// //         <div className='mt-5 mb-8 text-left space-y-2 flex justify-between items-start'>
// //           <div>
// //             <h3 className='text-black font-semibold'>{book.bookTitle}</h3>
// //             <p>{book.authorName}</p>
// //           </div>
// //           <div>
// //             <p className='font-bold text-blue-700'>$10.00</p>
// //           </div>
// //         </div>
// //       </Link>
// //     </div>
// //   );
// // };

// // export default BookCard;

// // BookCard.js
// import React from 'react';
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import { Link } from 'react-router-dom';
// import '../Styles/BookCard.css';

// const BookCard = ({ book, addToCart }) => {
//   const handleAddToCart = () => {
//     addToCart(book);
//   };

//   return (
//     <div className='book-card'>
//       <Link to={`/book/${book._id}`} className='cursor-pointer'>
//         <div className='bg-gray-100 p-8 rounded-lg relative'>
//           <img src={book.imageURL} alt={book.bookTitle} className='w-full' />
//           <div className='absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded'>
//             <ShoppingCartRoundedIcon className='w-4 h-4 text-white' onClick={handleAddToCart} />
//           </div>
//         </div>

//         <div className='mt-5 mb-8 text-left space-y-2 flex justify-between items-start'>
//           <div>
//             <h3 className='text-black font-semibold'>{book.bookTitle}</h3>
//             <p>{book.authorName}</p>
//           </div>
//           <div>
//             <p className='font-bold text-blue-700'>$10.00</p>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default BookCard;

// BookCard.js

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/BookCard.css'; // Import the BookCard.css file

// const BookCard = ({ book }) => {
//   return (
//     <div className='book-card'>
//       <Link to={`/book/${book._id}`} className='cursor-pointer'>
//         <div className='bg-gray-100 p-8 rounded-lg relative'>
//           <img src={book.imageURL} alt={book.bookTitle} className='w-full' />
//           {/* You can add back the icon or any other features as needed */}
//         </div>

//         <div className='mt-5 mb-8 text-left space-y-2 flex justify-between items-start'>
//           <div>
//             <h3 className='text-black font-semibold'>{book.bookTitle}</h3>
//             <p>{book.authorName}</p>
//           </div>
//           <div>
//             <p className='font-bold text-blue-700'>$10.00</p>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default BookCard;

// BookCard.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../Styles/BookCard.css';

// const BookCard = ({ book }) => {
//   const { _id, bookTitle, authorName, imageURL, bookDescription, bookPDFURL } = book;

//   return (
//     <div className='book-card'>
//       <Link to={`/book/${_id}`} className='cursor-pointer'>
//         <div className='bg-gray-100 p-8 rounded-lg relative'>
//           <img src={imageURL} alt={bookTitle} className='w-full' />
//         </div>

//         <div className='mt-5 mb-8 text-left space-y-2 flex justify-between items-start'>
//           <div>
//             <h3 className='text-black font-semibold'>{bookTitle}</h3>
//             <p>{authorName}</p>
//           </div>
//           <div>
//             <p className='font-bold text-blue-700'>$10.00</p>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default BookCard;

import React from 'react';
import { Link } from 'react-router-dom';
import '@progress/kendo-theme-default/dist/all.css'; // Import KendoReact styles
import { Card, CardImage, CardTitle, CardSubtitle } from '@progress/kendo-react-layout';
import { Avatar } from '@progress/kendo-react-layout';

const BookCard = ({ book }) => {
  const { _id, bookTitle, authorName, imageURL, bookDescription, bookPDFURL } = book;

  return (
    <div className="book-card">
      <Link to={`/book/${_id}`} className="cursor-pointer">
        <Card style={{ boxShadow: '0 0 4px 0 rgba(0, 0, 0, .1)', marginBottom: '15px' }}>
          <CardImage src={imageURL} style={{ height: '185px', maxWidth: '100%' }} />
          <CardTitle style={{ marginBottom: '4px' }}>{bookTitle}</CardTitle>
          <CardSubtitle>
            <p>{authorName}</p>
          </CardSubtitle>
        </Card>
      </Link>
    </div>
  );
};

export default BookCard;
