import { BiBook, BiCalendar } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

const ListedBooksCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    category,
    rating,
  } = book;
  return (
    <>
      {/* Read Books Section */}
      <div className="border rounded-xl min-h-72 p-6">
        {/* Image container and img styles */}
        <div className="flex flex-col md:flex-row gap-6 itec">
          <div className="md:w-72 border rounded-xl md:mx-0 flex items-center justify-center py-6 bg-gray-100">
            <img src={image} className="md:max-w-40 max-w-36" />
          </div>
          {/* Text layout */}

          <div>
            <div className="space-y-4">
              <p className="md:text-2xl font-bold font-PlayFair">{bookName}</p>
              <p className="font-medium font-WorkSans">By: {author}</p>
            </div>
            {/* tags and year of publishing */}
            <div className="md:flex  items-center gap-4 py-3 space-y-3 md:space-y-0">
              <div className="flex gap-4 items-center">
                <p className="font-bold font-WorkSans ">Tag</p>
                {tags.map((tag, index) => (
                  <p
                    className="text-[#23be0a] bg-[#23be0a] bg-opacity-5 px-3 py-2 rounded-3xl"
                    key={index}
                  >
                    #{tag}
                  </p>
                ))}
              </div>
              <p className="flex items-center gap-4">
                {" "}
                <BiCalendar /> Year of Publishing: {yearOfPublishing}
              </p>
            </div>
            {/* publisher and total pages */}
            <div className="md:flex items-center gap-4 pt-1">
              <p className="flex items-center gap-2">
                <BsPeople /> Publisher: {publisher}
              </p>
              <p className="flex items-center gap-2">
                <BiBook /> Total Pages: {totalPages}
              </p>
            </div>
            <div className="divider"></div>

            <div className="md:flex items-center gap-3 space-y-4 md:space-y-0">
              <p className="bg-blue-600 bg-opacity-10 rounded-full px-4 py-2">
                Category: {category}
              </p>
              <p className="bg-orange-600 bg-opacity-10 rounded-full px-4 py-2">
                Rating: {rating}
              </p>
              <button className="btn rounded-full bg-[#23be0a] text-white font-WorkSans  btn-sm mt-2 md:btn-md md:mb-2">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedBooksCard;
