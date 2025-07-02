import { NavLink } from "react-router";

const NavBarMobile = () => {
  return (
    <div className="h4 via-cream-500/85 from-cream-500 fixed top-16 left-0 z-50 flex h-[100%] w-full flex-col items-center justify-start space-y-6 bg-gradient-to-b to-white/0 pt-20 text-xl font-bold text-gray-900">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
      <NavLink to="/create-plan">Create Your Plan</NavLink>
    </div>
  );
};

export default NavBarMobile;
