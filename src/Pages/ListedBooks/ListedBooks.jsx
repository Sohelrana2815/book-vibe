import { useLoaderData } from "react-router-dom";
import useFilteredBooks from "../../Utility/useFilteredBooks";
import { getStoredReadBooks } from "../../Utility/SaveReadBook";
import { getStoredWishListBooks } from "../../Utility/SaveWishListBook";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBooksCard from "./ListedBooksCard";

const ListedBooks = () => {
  // Load books data
  const books = useLoaderData();

  // Use custom hook to filter books for "Read List"
  const readBooks = useFilteredBooks(books, getStoredReadBooks);

  // Use custom hook to filter books for "Wishlist"
  const wishListBooks = useFilteredBooks(books, getStoredWishListBooks);

  return (
    <>
      {/* Headline for List of Books */}
      <div className="border bg-[#131313] bg-opacity-5   rounded-2xl flex justify-center py-9">
        <h3 className="text-2xl font-bold">Books</h3>
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
