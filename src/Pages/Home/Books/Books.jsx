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
      <h2 className="text-center lg:mt-[100px] lg:text-[40px] font-bold font-PlayFair">
        Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-9 lg:w-[1170px] mx-auto">
        {books.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
