const getStoredWishListBooks = () => {
  const storedWishListBook = localStorage.getItem("wish-list");
  return storedWishListBook ? JSON.parse(storedWishListBook) : [];
};



