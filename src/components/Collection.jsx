const coffees = [
  {
    name: "Gran Espresso",
    image: "/images/home/collection/image-gran-espresso.png",
    alt: "Gran Espresso coffee package",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
    marginClass: "mt-6",
  },
  {
    name: "Planalto",
    image: "/images/home/collection/image-planalto.png",
    alt: "Planalto coffee package",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    marginClass: "mb-6",
  },
  {
    name: "Piccollo",
    image: "/images/home/collection/image-piccollo.png",
    alt: "Piccollo coffee package",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    marginClass: "mb-6",
  },
  {
    name: "Danche",
    image: "/images/home/collection/image-danche.png",
    alt: "Danche coffee package",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    marginClass: "mb-6",
  },
];

const Collection = () => {
  return (
    <section className="relative mx-0 my-30 w-full max-w-full">
      <div className="fade-top absolute z-0 mx-auto md:top-[1%] md:left-[12%] lg:top-[5%] lg:left-[20%]">
        <h2 className="title-alternate-big collection__title text-grey-100 mx-auto pl-6 text-[48px] md:text-[90px] lg:text-[150px] lg:leading-[72px]">
          Our collection
        </h2>
        <div className="title-gradient"></div>
      </div>

      <div className="relative z-10 w-full max-w-full gap-8 pt-24 md:flex md:flex-col md:items-center lg:grid lg:grid-cols-4">
        {coffees.map((coffee, index) => (
          <div
            key={index}
            className="my-20 flex w-full max-w-full flex-col items-center text-center md:ml-[25%] md:flex-row md:items-center lg:ml-0 lg:flex-col"
          >
            <div className={`${coffee.marginClass} w-full max-w-[200px]`}>
              <img
                src={coffee.image}
                alt={coffee.alt}
                className="h-auto w-full max-w-full object-contain"
              />
            </div>
            <div className="flex w-6/12 flex-col md:items-start lg:w-full lg:items-center">
              <h3 className="mb-4 text-xl font-bold text-gray-800 md:text-left md:text-2xl lg:text-center">
                {coffee.name}
              </h3>
              <p className="w-full text-sm leading-relaxed text-gray-600 md:text-left md:text-base lg:text-center">
                {coffee.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
