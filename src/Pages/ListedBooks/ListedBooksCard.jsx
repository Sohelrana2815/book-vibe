import { BiCalendar } from "react-icons/bi";

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
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-72 border rounded-xl md:mx-0 flex items-center justify-center py-6 bg-gray-100">
            <img src={image} className="md:max-w-40 max-w-36" />
          </div>
          {/* Text layout */}

          <div>
            <p>{bookName}</p>
            <p>By: {author}</p>

            <div className="md:flex  items-center gap-4">
              <div className="flex gap-4">
                <p>Tag</p>
                {tags.map((tag, index) => (
                  <p key={index}>#{tag}</p>
                ))}
              </div>
              <p className="flex items-center gap-4">
                {" "}
                <BiCalendar /> Year of Publishing: {yearOfPublishing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedBooksCard;
