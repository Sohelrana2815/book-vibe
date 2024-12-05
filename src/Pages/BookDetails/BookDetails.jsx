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
      <div className="max-w-screen-xl mx-auto md:min-h-[720px]  md:flex  md:gap-12 md:mt-14 lg:mt-16">
        <div className=" md:w-1/2 border py-8 md:py-16 px-20 bg-gray-100 rounded-2xl">
          <img src={book.image} alt="" className="" />
        </div>
        {/* Text content */}
        <div className="w-1/2 mt-8">
          {/* name and author */}
          <div className="space-y-3">
            <h2 className="md:text-4xl text-2xl font-PlayFair font-bold">
              {book.bookName}
            </h2>
            <p className="md:text-xl font-medium font-WorkSans">
              By: {book.author}
            </p>
          </div>

          <div className="divider"></div>

          <p className="md:text-xl font-medium font-WorkSans">
            {book.category}
          </p>
          <div className="divider"></div>
          {/* Review and tags */}
          <p className="font-WorkSans pb-4">
            <span className="font-bold">Review: </span>
            {book.review}
          </p>

          <div className="flex gap-2 items-center">
            <h3 className="font-bold font-WorkSans">Tag</h3>
            {book.tags.map((tag, index) => (
              <p
                key={index}
                className="font-medium font-WorkSans text-[#23be0a] bg-[#23be0a] rounded-3xl px-4 py-[7px] bg-opacity-5"
              >
                #{tag}
              </p>
            ))}
          </div>

          <div className="divider"></div>

          {/* Container bookInfo */}
          <div className="flex items-center gap-x-16">
            {/* Name of content */}
            <div className="font-WorkSans md:leading-relaxed">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>

            {/* Info div */}
            <div className="font-WorkSans font-semibold md:leading-relaxed">
              <p>{book.totalPages}</p>
              <p>{book.publisher}</p>
              <p>{book.yearOfPublishing}</p>
              <p>{book.rating}</p>
            </div>
          </div>

          {/* Button */}
          <div className="text-lg font-WorkSans flex gap-x-4 mt-8">
            <button onClick={() => readBook(idInt)} className="btn btn-outline">
              Read
            </button>
            <button
              onClick={() => wishList(idInt)}
              className="btn bg-[#50b1c9] text-white"
            >
              Wishlist
            </button>
            <SnackbarProvider />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
