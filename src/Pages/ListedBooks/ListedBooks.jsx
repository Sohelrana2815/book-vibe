import { BiSort } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import useFilteredBooks from "../../Utility/useFilteredBooks";
import { getStoredReadBooks } from "../../Utility/SaveReadBook";
import { getStoredWishListBooks } from "../../Utility/SaveWishListBook";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooksCard from "./ListedBooksCard";
import { Dropdown, Message } from "shineout";
import { useState } from "react";

const ListedBooks = () => {
  // Load books data
  const books = useLoaderData();

  // Filter books for Read List and Wish List
  const readBooks = useFilteredBooks(books, getStoredReadBooks);

  const wishListBooks = useFilteredBooks(books, getStoredWishListBooks);

  // States for sorted books
  const [sortedReadBooks, setSortedReadBooks] = useState(readBooks);
  const [sortedWishListBooks, setSortedWishListBooks] = useState(wishListBooks);

  // Function to handle sorting

  const handleSortBooks = (listType, order) => {
    const sortBooksByRating = (list) => {
      [...list].sort((a,b)=> order === "hi")
    };
  };

  return (
    <>
      <div>
        {/* Headline for List of Books */}
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
                <a onClick={() => handleDisplayBySort("Rating")}>
                  Highest Rating
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="grid gap-4">
            {readBooks.map((book) => (
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
