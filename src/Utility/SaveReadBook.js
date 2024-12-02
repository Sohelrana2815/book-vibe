// Get the stored read books from localStorage

const getStoredReadBooks = () => {
  const storedReadBooks = localStorage.getItem("read-book");
  return storedReadBooks ? JSON.parse(storedReadBooks) : [];
};

// Save a book to the read list

const saveReadBooks = (id) => {
  const storedReadBooks = getStoredReadBooks();

  // Check for duplicates

  if (storedReadBooks.includes(id)) {
    return {
      success: false,
      message: "This book is already in your read list.",
    };
  }

  // Add to the read list

  storedReadBooks.push(id);
  localStorage.setItem("read-book", JSON.stringify(storedReadBooks));

  return { success: true, message: "Book added to your read list." };
};

export { getStoredReadBooks, saveReadBooks };
