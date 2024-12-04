import { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../Utility/SaveReadBook";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);

  const books = useLoaderData();

  console.log(books);

  useEffect(() => {
    const readBookIds = getStoredReadBooks();

    console.log(readBookIds);

    if (books.length > 0) {
      const readList = books.filter((book) => readBookIds.includes(book.id));
      setReadBooks(readList);
    }
  }, [books]);

  return (
    <>
      <div>
        <div className="border bg-[#131313] bg-opacity-5   rounded-2xl flex justify-center py-9">
          <h3 className="text-2xl font-bold">Books</h3>
        </div>
        {/* Dropdown button */}
        <div className="flex justify-center  mt-8">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#23be0a] text-white text-center text-lg font-semibold"
            >
              Sort By <BiSort />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center">{readBooks.length}</h2>
        <ul className="list-disc">
          {readBooks.map((readBook, index) => (
            <li key={index}>{readBook.bookName}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListedBooks;
