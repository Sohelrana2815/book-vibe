import { useLoaderData, useParams } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { saveReadBooks } from "../../Utility/SaveReadBook";

const BookDetails = () => {
  const books = useLoaderData();

  const { id } = useParams();

  const idInt = parseInt(id);

  const book = books.find((book) => book.id === idInt);

  console.log(idInt, book);

  const readBook = (idInt) => {
    const isRead = saveReadBooks(idInt);
    if (isRead) {
      enqueueSnackbar("You have read this book.", { variant: "success" });
    } else {
      enqueueSnackbar("You have already read this book.", { variant: "error" });
    }
  };

  return (
    <>
      <div className="lg:w-[1440px] lg:h-[1030px] mx-auto lg:mt-[60px] flex gap-12  font-bold">
        <div className="lg:w-[600px] lg:h-[711px] bg-[#1313130D] flex items-center justify-center">
          <div className="lg:w-[425px] lg:h-[564px] ">
            <img src={book.image} alt="" />
          </div>
          {/* Text content */}
        </div>
        <div className="lg:w-[700px] ">
          <h2 className="lg:text-[40px] font-bold text-[#131313]">
            {book.bookName}
          </h2>
          <p className="lg:text-xl font-medium text-[#131313]">
            By: {book.author}
          </p>
          <div className="divider"></div>
          <h4 className="lg:text-xl font-medium text-[#131313]">
            {book.category}
          </h4>
          <div className="divider"></div>
          <p className="text-base font-normal text-[#131313]">
            <span className="font-bold">Review: </span> {book.review}
          </p>
          <div className="flex mt-6">
            <span className="mr-4 ">Tag</span>
            {book.tags.map((tag, index) => (
              <p
                key={index}
                className="mr-3 text-[#23be0a] font-medium px-2 py-1 rounded-lg bg-[#23be0a] bg-opacity-5"
              >
                #{tag}
              </p>
            ))}
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-16">
            <div className="text-base font-normal text-[#131313] space-y-3">
              <p>Number of Pages:</p>
              <p>Publisher: </p>
              <p>Year of Publishing: </p>
              <p>Rating: </p>
            </div>
            <div className="text-base font-semibold text-[#131313] space-y-3">
              <p> {book.totalPages}</p>
              <p>{book.publisher}</p>
              <p> {book.yearOfPublishing}</p>
              <p> {book.rating}</p>
            </div>
          </div>
          <div className="mt-[32px] flex gap-4">
            <button
              onClick={() => readBook(idInt)}
              className="btn btn-outline text-lg "
            >
              Read
            </button>

            <button className="btn  text-lg bg-[#50b1c9] text-white">
              Wishlist
            </button>
            <SnackbarProvider autoHideDuration={2000} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
