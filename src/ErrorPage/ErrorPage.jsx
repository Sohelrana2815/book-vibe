import { Link } from "react-router-dom";
import errorImg from "../assets/Error Page/errorImg.webp";
const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img src={errorImg} alt="" />
      <Link to={"/"}>
        <button className="btn rounded-full px-10 bg-blue-600 text-white">
          GO BACK
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
