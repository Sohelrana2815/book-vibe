import book_banner from "../../../assets/Banner_img/banner_book.png";
const Banner = () => {
  return (
    <>
      <div className="flex items-center border lg:mt-[52px] lg:h-[560px] bg-[#1313130D] bg-opacity-5 rounded-3xl p-[120px] lg:w-[1170px] mx-auto">
        <div className="lg:w-[526px] mx-auto">
          <h2 className="lg:text-[52px] font-bold font-PlayFair">
            Books to freshen up your bookshelf
          </h2>
          <button className="btn bg-[#23be0a] text-white lg:mt-[48px] font-WorkSans text-lg">
            View The List
          </button>
        </div>

        <figure className="lg:w-[318px]">
          <img src={book_banner} alt="" />
        </figure>
      </div>
    </>
  );
};

export default Banner;
