// Get the stored wish list books from localStorage

import { getStoredReadBooks } from "./SaveReadBook";

const getStoredWishListBooks = () => {
  const storedWishListBooks = localStorage.getItem("wish-list");
  return storedWishListBooks ? JSON.parse(storedWishListBooks) : [];
};

// Save a book to the wish list

const saveWishListBooks = (id) => {
  const storedWishListBooks = getStoredWishListBooks();

  const storedReadBooks = getStoredReadBooks();

  // Prevent adding to the wish list if already in the read list

  if (storedReadBooks.includes(id)) {
    return {
      success: false,
      message:
        "This book is already in your read list and cannot be added to the wish list.",
    };
  }

  // Check for duplicates in the wish list

  if (storedWishListBooks.includes(id)) {
    return {
      success: false,
      message: "This book is already in your wish list.",
    };
  }

  // Add to the wish list

  storedWishListBooks.push(id);

  localStorage.setItem("wish-list", JSON.stringify(storedWishListBooks));

  return { success: true, message: "Book added to your wish list." };
};

export { getStoredWishListBooks, saveWishListBooks };
