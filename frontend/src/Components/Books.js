// // Books.js
// import React, { useEffect, useState } from 'react';
// import { Card, Spinner } from 'flowbite-react';
// import Navbar from './Navbar';
// import BookCard from './BookCard'; // Assuming you have a BookCard component
// import '../Styles/Books.css'; // Import the Books.css file

// export default function Books() {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Fetching data
//     useEffect(() => {
//         fetch('http://localhost:5000/all-books')
//             .then(res => res.json())
//             .then(data => {
//                 setBooks(data);
//                 setLoading(false); // Set loading to false once data is fetched
//             })
//             .catch(error => {
//                 console.error('Error fetching books:', error);
//                 setLoading(false); // Set loading to false in case of an error
//             });
//     }, []);

//     // Loader
//     if (loading) {
//         return (
//             <div className="text-center mt-28">
//                 <Spinner aria-label="Center-aligned spinner example" />
//             </div>
//         );
//     }

//     return (
//         <div>
//             <Navbar />

//             <div className='books-container'>

//                 <h2 className='books-title'>All Books are Available Here</h2>
//                 <div className='books-grid'>
//                     {books.map(book => (
//                         <BookCard
//                             key={book._id}
//                             book={{
//                                 bookTitle: book.bookTitle || book.title,
//                                 authorName: book.authorName,
//                                 imageURL: book.imageURL || book.imageUrl,
//                                 bookDescription: book.bookDescription || book.description,
//                                 bookPDFURL: book.bookPDFURL || (book.book && book.book.pdfUrl),
//                             }}
//                         />
//                     ))}

//                 </div>
//             </div>
//         </div>
//     );
// }

// // Books.js
// import React, { useEffect, useState } from 'react';
// import { Card, Spinner } from 'flowbite-react';
// import Navbar from './Navbar';
// import BookCard from './BookCard';
// import '../Styles/Books.css';

// export default function Books() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetching data
//   useEffect(() => {
//     fetch('http://localhost:5000/all-books')
//       .then(res => res.json())
//       .then(data => {
//         setBooks(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching books:', error);
//         setLoading(false);
//       });
//   }, []);

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

//       <div className='books-container'>
//         <h2 className='books-title'>All Books are Available Here</h2>
//         <div className='books-grid'>
//           {books.map(book => (
//             <BookCard
//               key={book._id} // Ensure _id is available in each book object
//               book={{
//                 _id: book._id,
//                 bookTitle: book.bookTitle || book.title,
//                 authorName: book.authorName,
//                 imageURL: book.imageURL || book.imageUrl,
//                 bookDescription: book.bookDescription || book.description,
//                 bookPDFURL: book.bookPDFURL || (book.book && book.book.pdfUrl),
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BookCard from './BookCard';
import '@progress/kendo-theme-default/dist/all.css';
import { Loader } from '@progress/kendo-react-indicators'; // Use Loader instead of Spinner
import '../Styles/Books.css';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching data
  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-28">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="books-container">
        <h2 className="books-title">All Books are Available Here</h2>
        <div className="books-grid">
          {books.map((book) => (
            <BookCard
              key={book._id}
              book={{
                _id: book._id,
                bookTitle: book.bookTitle || book.title,
                authorName: book.authorName,
                imageURL: book.imageURL || book.imageUrl,
                bookDescription: book.bookDescription || book.description,
                bookPDFURL: book.bookPDFURL || (book.book && book.book.pdfUrl),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
