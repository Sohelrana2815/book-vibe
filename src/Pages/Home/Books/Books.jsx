import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error while fetching...", error));
  }, []);

  return (
    <>
      <h2 className="text-center font-bold font-PlayFair md:text-4xl">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
