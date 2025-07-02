const Card = ({ option, isSelected, onSelect }) => {
  return (
    <section
      className={`${
        isSelected
          ? "bg-[#0E8784] text-[#FEFCF7]"
          : "bg-[#F4F1EB] text-[#333D4B] hover:bg-[#FDD6BA]"
      } cursor-pointer rounded-[8px] p-6 transition-all duration-300 lg:h-[250px] lg:w-[228px]`}
      onClick={onSelect}
    >
      <h3 className="fraunces mb-6 text-[24px] font-bold">{option.title}</h3>
      <p className="body text-[15px] leading-[25px]">{option.description}</p>
    </section>
  );
};

export default Card;
