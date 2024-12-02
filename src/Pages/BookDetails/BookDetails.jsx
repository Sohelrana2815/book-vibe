import { useLoaderData, useParams } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { saveReadBooks } from "../../Utility/SaveReadBook";
import { saveWishListBooks } from "../../Utility/SaveWishListBook";

const BookDetails = () => {
  const books = useLoaderData();

  const { id } = useParams();

  const idInt = parseInt(id);

  const book = books.find((book) => book.id === idInt);

  console.log(idInt, book);

  // Handle marking a book as read
  const readBook = (id) => {
    const { success, message } = saveReadBooks(id);

    enqueueSnackbar(message, {
      variant: success ? "success" : "error",
    });
  };

  // Handle adding a book to the wish list

  const wishList = (id) => {
    const { success, message } = saveWishListBooks(id);
    enqueueSnackbar(message, {
      variant: success ? "info" : "warning",
    });
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto border min-h-[720px] md:flex justify-between">
     <div className="max-w-[600px] border p-4">
      <img src= {book.image} alt="" />
     </div>
     {/* Text content */}
     <div className="max-w-[600px] border p-4">
      world
     </div>
      </div>
    </>
  );
};

export default BookDetails;
