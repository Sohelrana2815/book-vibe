import "./banner.css";
import book_banner from "../../../assets/Banner_img/banner_book.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="banner-style ">
        {/* text content */}
        <div className="md:max-w-[600px] md:space-y-6 space-y-2">
          <p className="font-bold font-PlayFair md:text-6xl text-xl md:leading-relaxed">
            Books to freshen up your bookshelf
          </p>
          <Link to="listedBooks">
            <button className="btn btn-sm md:btn-md bg-[#23be0a] text-white font-WorkSans md:text-lg text-xs md:my-4 my-2">
              View The List
            </button>
          </Link>
        </div>

        <figure className="md:max-w-96 max-w-36">
          <img src={book_banner} alt="" />
        </figure>
      </div>
    </>
  );
};

export default Banner;
