const getStoredReadBooks = () => {
  const storedReadBook = localStorage.getItem("read-book");
  return storedReadBook ? JSON.parse(storedReadBook) : [];
};

const saveReadBooks = (id) => {
  const storedReadBooks = getStoredReadBooks();

  const exist = storedReadBooks.includes(id);

  if (!exist) {
    storedReadBooks.push(id);
    localStorage.setItem("read-book", JSON.stringify(storedReadBooks));
    return true;
  }
  return false;
};

export { saveReadBooks, getStoredReadBooks };
