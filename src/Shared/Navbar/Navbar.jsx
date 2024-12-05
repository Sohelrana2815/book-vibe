import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink>Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 md:mt-16 mt-6">
        <div className="navbar-start">
          <div className="dropdown pr-2">
            <div tabIndex={0} role="button" className="lg:hidden">
              <BiMenu className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <span className="md:text-xl text-lg hover:text-gray-500 hover:cursor-pointer font-WorkSans">
              Book Vibe
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <button className="btn md:btn-md bg-[#23be0a] text-white  font-WorkSans btn-sm">
            Sign in
          </button>
          <button className="btn btn-sm md:btn-md bg-[#59c6d2] text-white font-WorkSans">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
