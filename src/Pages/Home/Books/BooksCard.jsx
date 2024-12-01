import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
const BooksCard = ({ book }) => {
  const {
    id,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <>
      <Link to={`/bookDetails/${id}`}>
        <div className="lg:w-[340px] h-[434px] border rounded-2xl mx-auto p-6 shadow-xl">
          <div className=" lg:h-[230px] border mx-auto rounded-2xl bg-[#F3F3F3] flex items-center">
            <div className="lg:w-[134px] lg:h-[166px]  mx-auto">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-6 pt-4 ">
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className="py-1 px-2 text-[#23be0a] bg-[#23be0a] bg-opacity-5 rounded-2xl"
              >
                {tag}
              </p>
            ))}
          </div>
          <div className="space-y-2 py-2">
            <h2 className="font-PlayFair text-[#131313] text-2xl font-bold">
              {bookName}
            </h2>
            <p className="text-[#131313] font-medium font-WorkSans">
              By: {author}
            </p>
            <hr />
            <div className="flex item-center justify-between font-WorkSans">
              <h2 className="font-WorkSans">{category}</h2>
              <p className="flex items-center font-WorkSans ">
                {rating}
                <BiStar />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BooksCard;
