const Steps = ({ type }) => {
  return (
    <div
      className={`${type ? "p-10" : ""} my-10 hidden w-full items-center md:flex`}
    >
      <div className="h-8 w-8 rounded-full border-2 border-cyan-500 bg-transparent"></div>
      <div className="h-0.5 bg-orange-500 md:block md:w-[35%]"></div>
      <div className="h-8 w-8 rounded-full border-2 border-cyan-500 bg-transparent"></div>
      <div className="hidden h-0.5 bg-orange-500 md:block md:w-[35%]"></div>
      <div className="h-8 w-8 rounded-full border-2 border-cyan-500 bg-transparent"></div>
    </div>
  );
};

export default Steps;
