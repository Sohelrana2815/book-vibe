import { BiSort } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import useFilteredBooks from "../../Utility/useFilteredBooks";
import { getStoredReadBooks } from "../../Utility/SaveReadBook";
import { getStoredWishListBooks } from "../../Utility/SaveWishListBook";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooks = () => {
  // Load the full list of books from the router loader
  const books = useLoaderData();

  // Use custom hook to filter books for "Read List"

  const readBooks = useFilteredBooks(books, getStoredReadBooks);

  // Use custom hook to filter books for "Wishlist"

  const wishListBooks = useFilteredBooks(books, getStoredWishListBooks);

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

      {/* Wishlist Books Section */}
      {/* 
      <div>
        <h2 className="text-center">Wishlist Books: {wishListBooks.length}</h2>
        <ul className="list-disc">
          {wishListBooks.map((book, index) => (
            <li key={index}>{book.bookName}</li>
          ))}
        </ul>
      </div> */}

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          {/* Read Books Section */}
          <div className="border rounded-xl m">
            <ul className="list-disc">
              {readBooks.map((book, index) => (
                <li key={index}>{book.bookName}</li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wishlist Books</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ListedBooks;
