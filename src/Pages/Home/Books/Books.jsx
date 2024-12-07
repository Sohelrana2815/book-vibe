import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";
import AosAnimation from "../../../Components/AosAnimation/AosAnimation";

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
      <AosAnimation animation="fade-in">
        <h2 className="text-center font-bold font-PlayFair md:text-4xl text-2xl md:mt-28 mt-14 md:py-9 py-4">
          Books
        </h2>
      </AosAnimation>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BooksCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
