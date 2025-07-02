import { NavLink } from "react-router";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-grey-500 flex-col items-center p-10 lg:flex-row">
      <div className="lg:flex lg:w-full lg:items-center lg:justify-between">
        <div className="items-center lg:flex">
          <Logo usage={"footer"} />
          <nav className="my-6 flex flex-col items-center text-[#83888F] uppercase md:flex-row md:justify-center lg:my-0 lg:items-center lg:text-left">
            <NavLink
              to="/"
              className="body mt-4 duration-300 hover:text-[#FEFCF7] md:mr-8 lg:mt-2.5"
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className="body mt-4 duration-300 hover:text-[#FEFCF7] md:mr-8 lg:mt-2.5"
            >
              About us
            </NavLink>
            <NavLink
              to="/create-plan"
              className="body mt-4 duration-300 hover:text-[#FEFCF7] md:mr-8 lg:mt-2.5"
            >
              Create your plan
            </NavLink>
          </nav>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
