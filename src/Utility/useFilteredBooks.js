import { useState } from "react";
import { useEffect } from "react";

const useFilteredBooks = (books, getStoredBooks) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    // Retrieve stored book IDs from localStorage

    const storedBookIds = getStoredBooks();

    // Filter the books that match the stored IDs

    if (books.length > 0) {
      const filteredList = books.filter((book) =>
        storedBookIds.includes(book.id)
      );
      setFilteredBooks(filteredList);
    }
  }, [books, getStoredBooks]);

  // Return the filtered list of books
  return filteredBooks;
};

export default useFilteredBooks;
