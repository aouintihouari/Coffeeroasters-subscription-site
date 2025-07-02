import { NavLink } from "react-router";

const CreatePlanBtn = () => {
  return (
    <NavLink
      to="/create-plan"
      className="fraunces w-9/12 cursor-pointer rounded-md bg-cyan-500 px-6 py-3 text-center text-white transition-colors duration-300 hover:bg-[#66D2CF] md:w-5/12 md:px-8 md:py-4 lg:w-6/12"
    >
      Create your plan
    </NavLink>
  );
};

export default CreatePlanBtn;
