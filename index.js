
import { renderBooks } from './renderBooks.js'; 
function fetchBooks() {
  
  const fetchRequest = fetch('https://anapioficeandfire.com/api/books');

 
  return fetchRequest.then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .then((bookData) => {
  
    renderBooks(bookData);
  })
  .catch((error) => {
 
    console.error('Error fetching or rendering books:', error);
  });
}


fetchBooks();

