import { useLoaderData } from "react-router-dom";
import useFilteredBooks from "../../Utility/useFilteredBooks";
import { getStoredReadBooks } from "../../Utility/SaveReadBook";
import { getStoredWishListBooks } from "../../Utility/SaveWishListBook";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooksCard from "./ListedBooksCard";
import { Dropdown } from "shineout";

const ListedBooks = () => {
  // Load books data
  const books = useLoaderData();

  // Filter books for Read List and Wish List
  const readBooks = useFilteredBooks(books, getStoredReadBooks);

  const wishListBooks = useFilteredBooks(books, getStoredWishListBooks);

  // States for sorted books

  // Function to handle sorting

  // ShineOut dropdown data

  return (
    <>
      {/* Headline for List of Books */}
      <div className="border bg-[#131313] bg-opacity-5   rounded-2xl flex justify-center py-9">
        <h3 className="text-2xl font-bold">Books</h3>
      </div>
      {/* ShineOut Dropdown button */}
      <div className="flex justify-center">
        <Dropdown placeholder="Sort By" />
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
