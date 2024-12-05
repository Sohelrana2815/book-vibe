import { useLoaderData } from "react-router-dom";
import useFilteredBooks from "../../Utility/useFilteredBooks";
import { getStoredReadBooks } from "../../Utility/SaveReadBook";
import { getStoredWishListBooks } from "../../Utility/SaveWishListBook";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooksCard from "./ListedBooksCard";
import { BiSort } from "react-icons/bi";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

const ListedBooks = () => {
  // Load books data
  const books = useLoaderData();

  // Use custom hook to filter books for "Read List"
  const readBooks = useFilteredBooks(books, getStoredReadBooks);

  // Use custom hook to filter books for "Wishlist"
  const wishListBooks = useFilteredBooks(books, getStoredWishListBooks);

  // Sort State Initialization

  const [sortedReadBooks, setSortedReadBooks] = useState([]);

  // Sort to show data after readBook changes

  useEffect(() => {
    setSortedReadBooks(readBooks);
  }, [readBooks]);

  const sortBooks = (order) => {
    const sorted = [...readBooks].sort((a, b) => {
      if (order === "highest") {
        return b.rating - a.rating;
      } else {
        return a.rating - b.rating;
      }
    });
    setSortedReadBooks(sorted);
  };
  return (
    <>
      {/* Headline for List of Books */}
      <div className="border bg-[#131313] bg-opacity-5   rounded-2xl flex justify-center py-9">
        <h3 className="text-2xl font-bold">Books</h3>
      </div>
      {/* Dropdown */}
      <div className="flex justify-center">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Rating <BiSort />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => sortBooks("highest")}>Highest Rating</a>
            </li>
            <li>
              <a onClick={() => sortBooks("lowest")}>Lowest Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>
        <TabPanel>
          <div className="grid gap-4">
            {sortedReadBooks.map((book) => (
              <ListedBooksCard key={book.id} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid gap-4">
            {wishListBooks.map((book) => (
              <ListedBooksCard key={book.id} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ListedBooks;
