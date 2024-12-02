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
          <div className="dropdown mt-1">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden btn-xs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
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
