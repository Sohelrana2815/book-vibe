const getStoredWishListBooks = () => {
  const storedWishListBook = localStorage.getItem("wish-list");
  return storedWishListBook ? JSON.parse(storedWishListBook) : [];
};

const saveWishListBooks = (idInt) => {
  const storedWishListBooks = getStoredWishListBooks();

  const exist = storedWishListBooks.includes(idInt);
  if (!exist) {
    storedWishListBooks.push(idInt);
    localStorage.setItem("wish-list", JSON.stringify(storedWishListBooks));
    return true;
  }
  return false;
};

export { saveWishListBooks, getStoredWishListBooks };
