import { BiSort } from "react-icons/bi";

const ListedBooks = () => {
  return (
    <>
      <div className="border bg-[#131313] bg-opacity-5 lg:w-[1170px] lg:h-[100px] rounded-2xl mx-auto mt-9">
        <div className="flex justify-center items-center lg:h-[100px]">
          <h3 className="text-2xl font-bold">Books</h3>
        </div>
        {/* Dropdown button */}
        <div className="flex justify-center mt-8">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-[#23be0a] text-white text-center text-lg font-semibold"
            >
              Sort By <BiSort />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedBooks;
