import { useEffect } from "react";
import { BiSort } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../Utility/SaveReadBook";

const ListedBooks = () => {
  const listedBooks = useLoaderData();

  // useEffect(()=>{
  //   const readBookIds = getStoredReadBooks();

  //   if(listedBooks.length>0){
  //     const readBooks = listedBooks.filter()
  //   }
  // },[])

  return (
    <>
      <div>
        <div className="border bg-[#131313] bg-opacity-5   rounded-2xl flex justify-center py-9">
          <h3 className="text-2xl font-bold">Books</h3>
        </div>
        {/* Dropdown button */}
        <div className="flex justify-center  mt-8">
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
