import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const BooksCard = ({ book }) => {
  const { id, bookName, author, image, rating, category, tags } = book;

  return (
    <>
      <Link to={`/bookDetails/${id}`}>
        <div className="md:max-w-80 md:h-[480px] border rounded-2xl p-6 shadow-xl  mx-auto">
          <div className="border rounded-2xl bg-[#F3F3F3] flex justify-center py-4 md:h-[230px]">
            <div className="md:max-w-32 max-w-36">
              <img src={image} alt="Book Image" />
            </div>
          </div>
          {/* text content */}
          <div>
            <div className="flex items-center gap-6 py-[9px]">
              {tags.map((tag, idx) => (
                <p
                  key={idx}
                  className="py-1 px-2 text-[#23be0a] bg-[#23be0a] bg-opacity-5 rounded-2xl text-xs md:text-base"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="space-y-4">
              <h2 className="font-PlayFair text-[#131313] md:text-2xl font-bold">
                {bookName}
              </h2>
              <p className="text-[#131313] font-medium font-WorkSans text-sm md:text-base">
                By: {author}
              </p>
              <hr />
              <div className="flex item-center justify-between font-WorkSans text-xs md:text-base">
                <h2 className="font-WorkSans">{category}</h2>
                <p className="flex items-center font-WorkSans ">
                  {rating}
                  <BiStar />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

BooksCard.propTypes = {
  book: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      bookName: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
      totalPages: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }.isRequired
  ),
};

export default BooksCard;
