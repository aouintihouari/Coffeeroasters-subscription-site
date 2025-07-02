import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="nav-menu hidden md:flex">
      <ul className="flex">
        <li className="ml-8 cursor-pointer text-[#83888F] duration-300 hover:text-[#333D4B]">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="ml-8 cursor-pointer text-[#83888F] duration-300 hover:text-[#333D4B]">
          <NavLink to="/about-us">ABOUT US</NavLink>
        </li>
        <li className="ml-8 cursor-pointer text-[#83888F] duration-300 hover:text-[#333D4B]">
          <NavLink to="/create-plan">Create your plan</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
